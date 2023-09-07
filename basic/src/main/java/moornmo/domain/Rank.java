package moornmo.domain;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;
import moornmo.BasicApplication;

@Entity
@Table(name = "Rank_table")
@Data
//<<< DDD / Aggregate Root
public class Rank {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    public static RankRepository repository() {
        RankRepository rankRepository = BasicApplication.applicationContext.getBean(
            RankRepository.class
        );
        return rankRepository;
    }
}
//>>> DDD / Aggregate Root
