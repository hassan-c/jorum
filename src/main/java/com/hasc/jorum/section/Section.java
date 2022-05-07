package com.hasc.jorum.section;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hasc.jorum.category.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "section")
@Getter
@Setter
@NoArgsConstructor
public class Section {
    @Id
    @SequenceGenerator(
            name = "section_sequence",
            sequenceName = "section_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "section_sequence"
    )
    private Long id;

    private String name;

    private String description;

    @JsonIgnore
    @ManyToOne
    private Category category;
}
