package su.fontru;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import su.fontru.model.Account;
import su.fontru.model.SubscriptionType;
import su.fontru.repositories.AccountRepository;
import su.fontru.repositories.SubscriptionTypeRepository;

@SpringBootApplication
public class RestAPI {

	public static void main(String[] args) {
		SpringApplication.run(RestAPI.class, args);
	}

	@Bean
	public CommandLineRunner initSubscriptionType(SubscriptionTypeRepository str, BCryptPasswordEncoder passwordEncoder) {
		return args -> {

			if(str.count() != 0)
				return;

			str.deleteAll();

		    str.save(new SubscriptionType("type1", "200", "300"));
			str.save(new SubscriptionType("type2", "400", "600"));
			str.save(new SubscriptionType("type3", "800", "900"));
		};
	}

	@Bean
	public CommandLineRunner initUsers(AccountRepository accounts, BCryptPasswordEncoder passwordEncoder) {
		return args -> {

			Account found = accounts.findByUsername("admin").orElse(null);
			if(found != null) {
				accounts.delete(found);
			}
			if(found == null) {
				Account a = new Account();
				a.setUsername("admin@demo.fr");
				a.setPassword(passwordEncoder.encode("admin"));
				a.setRoles("ROLE_ADMIN");
				accounts.save(a);
			}
		};
	}
}
