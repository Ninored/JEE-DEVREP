package su.fontru.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.hateoas.Resource;
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

import java.util.Optional;

@RestController
public class SubscriptionController {
	
	@Autowired
    private SubscriptionRepository subscriptionRepository;

	@Autowired
	private ConferenceRepository conferenceRepository;

	/*
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    return authentication.getAuthorities().parallelStream().map(o -> o.getAuthority()).toArray();
	 */


	@PostMapping("/subscription")
    public ResponseEntity<String> postInscription(@RequestBody Resource<Subscription> subscription) throws Exception {
	    /* Getting en inscription */

        // Check conference
        subscriptionRepository.save(subscription.getContent());

	    return ResponseEntity.ok("Subscription registered");
    }

    @PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/subscription/validate")
    public ResponseEntity<String> validateInscription(@RequestParam Long id) {
	    /* Get subscription */
        Subscription subscription = subscriptionRepository.findById(id).orElseThrow( () ->
            new ResponseStatusException(HttpStatus.NOT_FOUND, "Subscription not found")
        );

        /* Validate Subscription */
        subscription.setValidated(true);


        return ResponseEntity.ok("Subscription validated");
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/subscription")
    public ResponseEntity<String> deleteInscription(@RequestParam Long id) {
        subscriptionRepository.deleteById(id);
        return ResponseEntity.ok("Subscription deleted");
    }
	
}