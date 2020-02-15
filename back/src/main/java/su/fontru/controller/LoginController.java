package su.fontru.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import su.fontru.model.Account;
import su.fontru.repositories.AccountRepository;

@RestController
public class LoginController {

    @Autowired
    private AccountRepository accounts;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/login")
    public ResponseEntity<String> login() throws Exception {
        /*
        Account found = accounts.findByUsername(account.getContent().getUsername()).orElseThrow( () ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Username not found")
        );

        if(passwordEncoder.encode(found.getPassword()) != account.getContent().getPassword())
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid credentials");
        */
        return ResponseEntity.ok("Connected");
    }
}
