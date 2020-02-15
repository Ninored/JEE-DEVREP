package su.fontru.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.server.ResponseStatusException;
import su.fontru.model.Subscription;
import su.fontru.repositories.ConferenceRepository;
import su.fontru.repositories.SubscriptionRepository;
import su.fontru.repositories.SubscriptionTypeRepository;
import su.fontru.service.IMailSender;
import su.fontru.service.MailSender;

import java.util.Optional;

@RestController
public class SubscriptionController {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private SubscriptionTypeRepository subscriptionTypeRepository;

    @Autowired
    private ConferenceRepository conferenceRepository;

    @Autowired
    private IMailSender mailsender;

	/*
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    return authentication.getAuthorities().parallelStream().map(o -> o.getAuthority()).toArray();
	 */


    @PostMapping("/subscription")
    public Subscription postInscription(@RequestBody Subscription subscription) throws Exception {
        /* Getting en inscription */

        subscription.setConference(
                conferenceRepository.findById(
                        subscription.getConference().getId()
                ).orElseThrow( () ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "not found")
                ));

        subscription.setSubscriptionType(
                subscriptionTypeRepository.findById(
                        subscription.getSubscriptionType().getId()
                ).orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "not found")
                )
        );
        // Check conference
        subscriptionRepository.save(subscription);

        return subscription;
        //    return ResponseEntity.ok("Subscription registered");
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/subscription/validate/{id}")
    public ResponseEntity<String> validateInscription(@PathVariable Long id) {
        /* Get subscription */
        Subscription subscription = subscriptionRepository.findById(id).orElseThrow( () ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Subscription not found")
        );

        /* Validate Subscription */
        subscription.setValidated(true);
        subscriptionRepository.save(subscription);

        mailsender.send(subscription.getEmail(), subscription.getId());


        return ResponseEntity.ok("Subscription validated");
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/subscription")
    public ResponseEntity<String> deleteInscription(@RequestParam Long id) {
        subscriptionRepository.deleteById(id);
        return ResponseEntity.ok("Subscription deleted");
    }

}