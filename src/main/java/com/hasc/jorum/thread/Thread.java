package com.hasc.jorum.thread;

import com.hasc.jorum.post.Post;
import com.hasc.jorum.section.Section;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "thread")
@Getter
@Setter
@NoArgsConstructor
public class Thread {
    @Id
    @SequenceGenerator(
            name = "thread_sequence",
            sequenceName = "thread_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "thread_sequence"
    )
    private Long id;
    private String title;

    public Thread(String title) {
        this.title = title;
    }

    @ManyToOne
    private Section section;

    @OneToMany(mappedBy = "thread")
    private List<Post> posts;
}
