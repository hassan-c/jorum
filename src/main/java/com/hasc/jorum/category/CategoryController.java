package com.hasc.jorum.category;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/category")
public class CategoryController {
    private String name;

    @GetMapping
    public String getAllCategories() {
        return "works";
    }
}
