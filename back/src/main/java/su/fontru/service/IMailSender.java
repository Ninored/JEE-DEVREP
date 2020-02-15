package su.fontru.service;

public interface IMailSender {

    public void send(String email, Long token);

}
