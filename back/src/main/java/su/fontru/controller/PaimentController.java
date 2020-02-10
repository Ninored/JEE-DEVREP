package su.fontru.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import su.fontru.model.Banque;
import su.fontru.model.Inscription;

@RestController
public class PaimentController {

	//private static final String template = "Hello, %s!";
	//private final AtomicLong counter = new AtomicLong();

	@GetMapping("/paiement")
	public String banque(@RequestParam(value = "name", defaultValue = "") String name, @RequestParam(value = "value", defaultValue = "0") Double value) {
		Banque b = new Banque();
		
		if(b.checkPaiment(name, value))
			return "paiement ok" ;
		
		return "t'es pauvre";
		
	}
}