package su.fontru;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import su.fontru.model.Account;
import su.fontru.repositories.AccountRepository;

@SpringBootApplication
public class RestAPI {

	public static void main(String[] args) {
		SpringApplication.run(RestAPI.class, args);
	}

	@Bean
	public CommandLineRunner initUsers(AccountRepository accounts, BCryptPasswordEncoder passwordEncoder) {
		return args -> {
			Account a = new Account();
			a.setUsername("admin");
			a.setPassword(passwordEncoder.encode("admin"));
			a.setRoles("ROLE_ADMIN");
			accounts.save(a);
		};
	}
}
