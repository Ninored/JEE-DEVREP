package su.fontru.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import su.fontru.model.Conference;
import su.fontru.model.Subscription;
import su.fontru.model.SubscriptionType;
import su.fontru.repositories.ConferenceRepository;
import su.fontru.repositories.SubscriptionRepository;
import su.fontru.repositories.SubscriptionTypeRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ConferenceController {

    @Autowired
    ConferenceRepository conferences;

    @Autowired
    SubscriptionRepository subscriptions;

    @Autowired
    SubscriptionTypeRepository subscriptiontypes;


    @GetMapping("/conferences")
    public Iterable<Conference> getConferences() {
        return conferences.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/conferences/subscriptions/{id}")
    public Iterable<Subscription> getConferencesSubscriptions(@PathVariable("id") Long id) throws Exception {
        return subscriptions.findAllByConferenceId(id);
    }

    @GetMapping("/conferences/{id}")
    public Conference getConferences(@PathVariable("id") Long id) throws Exception {
        Conference conf = conferences.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Subscription not found")
        );
        return conf;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/conferences")
    public ResponseEntity<String> postConference(@RequestBody EntityModel<Conference> conf) {
        List<SubscriptionType> st = new ArrayList<>();
        subscriptiontypes.findAll().forEach(s -> st.add(s));
        if(st==null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Subscription Type not found");

        conf.getContent().setSubscriptionTypes(st);

        conferences.save(conf.getContent());
        return ResponseEntity.ok("Conference addded");
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/conferences/{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") Long id) {
        conferences.deleteById(id);

        return ResponseEntity.ok("Deleted");
    }

}
