package com.azad.projects.empmgmtapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiRunningTestController {

    @GetMapping(path = "/test")
    public String test() {
        return "API is up and running";
    }
}
