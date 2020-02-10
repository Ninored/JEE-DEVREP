package su.fontru.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import su.fontru.model.Inscription;
import su.fontru.repositories.InscriptionRepository;

@RestController
public class InscriptionController {
	
	@Autowired
    private InscriptionRepository repository;
	
	//private static final String template = "Hello, %s!";
	//private final AtomicLong counter = new AtomicLong();

	/*@GetMapping("/inscription")
	public Inscription inscription() {
		
		
		return new Inscription();
	}*/
	
	@PostMapping("/inscription")
    Inscription createOrSaveInscription(@RequestBody Inscription inscription) {
        return repository.save(inscription);
		/*System.out.println(inscription);
		return null;
		*/
    }
	
	
	/*@PostMapping(value = "/inscription")
	public ResponseEntity<?> createCustomer(@RequestBody Inscription inscription) {

		customerDAO.create(customer);

		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}*/
}