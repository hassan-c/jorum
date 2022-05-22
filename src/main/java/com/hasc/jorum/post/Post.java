package com.hasc.jorum.post;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hasc.jorum.thread.Thread;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "post")
@Getter
@Setter
@NoArgsConstructor
public class Post {
    @Id
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "post_sequence"
    )
    private Long id;

    private String body;

    @JsonIgnore
    @ManyToOne
    private Thread thread;
}
