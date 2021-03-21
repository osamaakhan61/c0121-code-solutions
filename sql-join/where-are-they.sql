select  "line1",
        "cities"."name",
        "district",
        "countries"."name"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId")
where "district" IS NOT NULL
