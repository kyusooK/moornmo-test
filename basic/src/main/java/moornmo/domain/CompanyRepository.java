package moornmo.domain;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import moornmo.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel="companies", path="companies")
public interface CompanyRepository extends PagingAndSortingRepository<Company, >{
    @Query(value = "select company " +
        "from Company company " +
        "where(:name is null or company.name like %:name%)")
       List<Company> findByCompanyQuery       
(String name, Pageable pageable);
}