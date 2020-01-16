package su.fontru;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;

@Path("/hello")
public class restTest {

  @GET
  @Produces("text/plain")
  public String hw() {
    return "Hey !";
  }
}
