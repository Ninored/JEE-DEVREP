package su.fontru.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;


public class Banque {
	Map<String, Double> accounts = new HashMap<String, Double>();
	
	public Banque() {
		accounts.put("kevin", (double) 150);
		accounts.put("ulysse", (double) 200);
		accounts.put("yannick", (double) 30);
	}
	
	public boolean checkPaiment(String name, Double somme) {
		if(accounts.get(name) >= somme)
			return true;
		
		return false;
		
	}
}
