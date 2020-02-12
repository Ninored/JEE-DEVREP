package su.fontru.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import su.fontru.model.Inscription;
import su.fontru.repositories.InscriptionRepository;

@RestController
public class InscriptionController {
	
	@Autowired
    private InscriptionRepository repository;
	

	@GetMapping("/inscription")
    public Object[] getInscription() {
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    return authentication.getAuthorities().parallelStream().map(o -> o.getAuthority()).toArray();
    }

	@PostMapping("/inscription")
    Inscription createOrSaveInscription(@RequestBody Inscription inscription) {
        return repository.save(inscription);
		/*System.out.println(inscription);
		return null;
		*/
    }
	
}