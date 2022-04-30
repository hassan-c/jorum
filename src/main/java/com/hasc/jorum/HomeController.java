package com.hasc.jorum;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    // TODO: make this a regex for everything except URLs starting with /api
    @RequestMapping(value = {
            "/", "/users", "/login", "/signup"
    })
    public String index() {
        return "build/index.html";
    }

}