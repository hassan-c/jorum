package com.hasc.jorum.util;

public class Slug {
    public static String deSlugify(String slug) {
        return slug.replaceAll("-", " ");
    }
}
