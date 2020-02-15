package su.fontru.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailSender implements IMailSender {

    @Autowired
    public JavaMailSender emailSender;

    @Autowired
    private Environment environment;

    public void send(String email, Long token) {

        // Create a Simple MailMessage.
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(email);
        message.setSubject("[FONTRU] Please conference payment");
        message.setText("You can procede to the payement of our subscription here: " +
                "http://" + environment.getProperty("api_url") + "/payment/" + token);

        // Send Message!
        this.emailSender.send(message);
    }
}
