package com.onterest.api.controller;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.onterest.api.model.*;
import com.onterest.api.repository.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api")
public class Controller {

    private JSONObject globalObject;

    @Autowired
    private memberRepository memberRepo;

    @Autowired
    private clubRepository clubRepo;

    @Autowired
    private subclubRepository subClubRepo;

    @Autowired
    private ontryRepository ontryRepo;

    @Autowired
    private commentRepository commentRepo;

    @Autowired
    private messagesRepository messageRepo;

    @Autowired
    private memberofclubRepository memberofclubRepo;

    @Autowired
    private memberofsubclubRepository memberofsubclubRepo;

    @Autowired
    private reportRepository reportRepo;

    @Autowired
    private bugReportRepository bugReportRepo;

    @Autowired
    private surveyRepository surveyRepo;

    @Autowired
    private optionsRepository optionRepo;

    //Admin Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/admins")
    public List<member> getAdmins(){
        return memberRepo.getAdminList();
    }

    @PostMapping("/admin/authentication")
    public JSONObject adminAuthentication(@RequestBody JSONObject object){
        globalObject = new JSONObject();
        globalObject.put("status", "NO");
        if(object != null){
            member mem = memberRepo.isAdminAuthenticated(object.get("username").toString(), object.get("password").toString());
            if(mem != null){
                globalObject.put("status", "OK");
            }
        }
        return globalObject;
    }


    //SubAdmin Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/subadmins")
    public List<member> getSubAdmins(){
        return memberRepo.getSubAdminList();
    }

    @PostMapping("/subadmin/authentication")
    public JSONObject subAdminAuthentication(@RequestBody JSONObject object){
        globalObject = new JSONObject();
        globalObject.put("status", "NO");
        if(object != null){
            member mem = memberRepo.isSubAdminAuthenticated(object.get("username").toString(), object.get("password").toString());
            if(mem != null){
                globalObject.put("status", "OK");
            }
        }
        return globalObject;
    }

    //Member Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/members")
    public List<member> getMembers(){
        return memberRepo.getMemberList();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/member/{username}")
    public member getMember(@PathVariable String username){
        return memberRepo.findOne(username);
    }

    @PostMapping("/member/authentication")
    public JSONObject memberAuthentication(@RequestBody JSONObject object){
        globalObject = new JSONObject();
        globalObject.put("status", "NO");
        if(object != null){
            member mem = memberRepo.isMemberAuthenticated(object.get("username").toString(), object.get("password").toString());
            if(mem != null){
                globalObject.put("status", "OK");
            }
        }
        return globalObject;
    }

    @PostMapping("/addmember")
    public JSONObject saveMember(@RequestBody member model){
        memberRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @PutMapping("/updatemember")
    public JSONObject updateMember(@RequestBody member model){
        memberRepo.saveAndFlush(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deletemember/{username}")
    public JSONObject deletemember(@PathVariable String username){
        memberRepo.delete(username);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Club Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/clubs")
    public List<club> getClubs(){
        return clubRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/club/{name}")
    public club getClub(@PathVariable String name){
        return clubRepo.findOne(name);
    }

    @PostMapping("/addclub")
    public JSONObject saveClub(@RequestBody club model){
        clubRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deleteclub/{name}")
    public JSONObject deleteClub(@PathVariable String name){
        clubRepo.delete(name);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //SubClub api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/subclubs")
    public List<subclub> getSubClubs(){
        return subClubRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/subclub/{name}")
    public subclub getSubClub(@PathVariable String name){
        return subClubRepo.findOne(name);
    }

    @PostMapping("/addsubclub")
    public JSONObject saveSubClub(@RequestBody subclub model){
        subClubRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deletesubclub/{name}")
    public JSONObject deleteSubClub(@PathVariable String name){
        subClubRepo.delete(name);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Ontry Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ontries")
    public List<ontry> getOntryList(){
        return ontryRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ontry/user/{member}")
    public List<ontry> getOntryByUsername(@PathVariable String member){
        return ontryRepo.getOntryByUsername(member);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ontry/id/{id}")
    public ontry getOntryById(@PathVariable Integer id){
        return ontryRepo.findOne(id);
    }

    @PostMapping("/addontry")
    public JSONObject saveOntry(@RequestBody ontry model){
        ontryRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deleteontry/{id}")
    public JSONObject deleteOntry(@PathVariable Integer id){
        ontryRepo.delete(id);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Comment Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/comments")
    public List<comment> getComments(){
        return commentRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/comment/user/{member}")
    public List<comment> getCommentByUser(@PathVariable String member){
        return commentRepo.getCommentByMember(member);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/comment/ontry/{id}")
    public List<comment> getCommentByUser(@PathVariable Integer id){
        return commentRepo.getCommentByOntry(id);
    }

    @PostMapping("/addcomment")
    public JSONObject saveComment(@RequestBody comment model){
        commentRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deletecomment/{id}")
    public JSONObject deleteComment(@PathVariable Integer id){
        commentRepo.delete(id);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Message Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/messages")
    public List<messages> getMessages(){
        return messageRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/message/sender/{sender}")
    public List<messages> getSenderMessage(@PathVariable String sender){
        return messageRepo.getSenderMessages(sender);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/message/receiver/{receive}")
    public List<messages> getReceiverMessages(@PathVariable String receive){
        return messageRepo.getReceiverMessages(receive);
    }

    @PostMapping("/sendmessage")
    public JSONObject sendMessage(@RequestBody messages model){
        messageRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deletemessage/{id}")
    public JSONObject deleteMessage(@PathVariable Integer id){
        messageRepo.delete(id);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Member Of Club Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/memberofclubs")
    public List<memberofclub> getMemberOfClubs(){
        return memberofclubRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/memberofclubs/member/{username}")
    public List<memberofclub> getMemberOfClubByUser(@PathVariable String username){
        return memberofclubRepo.getMemberOfClubByUser(username);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/memberofclubs/club/{clubname}")
    public List<memberofclub> getMemberOfClubByClub(@PathVariable String clubname){
        return memberofclubRepo.getMemberOfClubByClub(clubname);
    }

    @PostMapping("/memberofclub")
    public JSONObject saveMemberOfclub(@RequestBody memberofclub model){
        memberofclubRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/memberofclub/{id}")
    public JSONObject deleteMemberOfClub(@PathVariable Integer id){
        memberofclubRepo.delete(id);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Member Of Sub Club Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/memberofsubclubs")
    public List<memberofsubclub> getMemberOfSubClubs(){
        return memberofsubclubRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/memberofsubclubs/member/{username}")
    public List<memberofsubclub> getMemberOfSubClubByUser(@PathVariable String username){
        return memberofsubclubRepo.getMemberOfSubClubByUser(username);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/memberofsubclubs/club/{clubname}")
    public List<memberofsubclub> getMemberOfSubClubByClub(@PathVariable String clubname){
        return memberofsubclubRepo.getMemberOfSubClubByClub(clubname);
    }


    @PostMapping("/memberofsubclubs")
    public JSONObject saveMemberOfSubclub(@RequestBody memberofsubclub model){
        memberofsubclubRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/memberofsubclubs/{id}")
    public JSONObject deleteMemberOfSubClub(@PathVariable Integer id){
        memberofsubclubRepo.delete(id);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Report api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/reports")
    public List<report> getReports(){
        return reportRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/report/{id}")
    public report getReport(@PathVariable Integer id){
        return reportRepo.findOne(id);
    }

    @PostMapping("/addreport")
    public JSONObject saveReport(@RequestBody report model){
        reportRepo.saveAndFlush(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deletereport/{id}")
    public JSONObject deleteReport(@PathVariable Integer id){
        reportRepo.delete(id);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Bug Report Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/bugreports")
    public List<bugReport> getBugReports(){
        return bugReportRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/bugreport/{id}")
    public bugReport getBugReport(@PathVariable Integer id){
        return bugReportRepo.findOne(id);
    }

    @PostMapping("/addbugreport")
    public JSONObject saveBugReport(@RequestBody bugReport model){
        bugReportRepo.saveAndFlush(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deletebugreport/{id}")
    public JSONObject deleteBugReport(@PathVariable Integer id){
        bugReportRepo.delete(id);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    //Survey Api
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/surveys")
    public List<survey> getSurveyList(){
        return surveyRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/survey/{name}")
    public survey getSurvey(@PathVariable String name){
        return surveyRepo.findOne(name);
    }

    @PostMapping("/addsurvey")
    public JSONObject saveSurvey(@RequestBody survey model){
        surveyRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deletesurvey/{name}")
    public JSONObject deleteBugReport(@PathVariable String name){
        surveyRepo.delete(name);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @PostMapping("/addoption")
    public JSONObject saveSurvey(@RequestBody options model){
        optionRepo.save(model);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }

    @DeleteMapping("/deleteoption/{selection}")
    public JSONObject deleteOption(@PathVariable String selection){
        optionRepo.delete(selection);
        JSONObject obj = new JSONObject();
        obj.put("status", "OK");
        return obj;
    }


}
