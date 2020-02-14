package su.fontru.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import su.fontru.model.Account;
import su.fontru.repositories.AccountRepository;

@RestController
public class LoginController {

    @Autowired
    AccountRepository accounts;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Resource<Account> account) {
        Account found = accounts.findByUsername(account.getContent().getUsername()).orElseThrow( () ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Username not found")
        );

        return ResponseEntity.ok("Connected");
    }
}
