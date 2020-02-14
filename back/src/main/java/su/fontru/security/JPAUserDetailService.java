package su.fontru.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import su.fontru.model.Account;
import su.fontru.repositories.AccountRepository;

import java.util.HashSet;
import java.util.Set;

@Service
public class JPAUserDetailService implements UserDetailsService {

    @Autowired
    AccountRepository users;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account user = users.findByUsername(username).orElseThrow(() ->  new UsernameNotFoundException(username));

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        String[] roles = user.getRoles().split(";");
        for( String r : roles ) {
            grantedAuthorities.add(new SimpleGrantedAuthority(r));
        }

        return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
    }
}
