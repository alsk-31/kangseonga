package com.common.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {
     
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail() {
        
        // 수신할 대상을 담을 ArrayList 생성
        ArrayList<String> toUserList = new ArrayList<>();
        
        // 수신 대상 추가
        toUserList.add("7tjddk@gmail.com");
        toUserList.add("alsk-31@naver.com");
        
        // 수신 대상 개수
        int toUserSize = toUserList.size();
        
        // SimpleMailMessage (단순텍스트 구성 메일 생성할 때 이용 )
        SimpleMailMessage simpleMessage = new SimpleMailMessage();
        
        // 수신자설정
        simpleMessage.setTo((String[]) toUserList.toArray(new String[toUserSize]));
        
        // 메일제목
        simpleMessage.setSubject("Subject Sample");
        
        // 메일내용
        simpleMessage.setText("Text Sample");
        
        // 메일 발송
        javaMailSender.send(simpleMessage);
    }
}