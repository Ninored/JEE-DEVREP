package security;

public interface AuthenticationManager {

	  Authentication authenticate(Authentication authentication)
	    throws AuthenticationException;

	}