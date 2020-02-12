package su.fontru.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public UserDetailsService jpaUserDetailService() {
        return new JPAUserDetailService();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    };

    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(jpaUserDetailService()).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().and().csrf().disable();
        /*
        http
                .httpBasic()
                .and()
                .authorizeRequests().antMatchers("/datarest/conferences").authenticated()
                .and()
                .csrf().disable();
        /*
        http
                .csrf().disable()
                .authorizeRequests()
                    .antMatchers("/**").permitAll()
                    .antMatchers("/datarest/conferences").hasRole("ADMIN");
         */
    }
}
