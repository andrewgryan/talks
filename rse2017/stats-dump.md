### Statistics format

- Database of summary statistics

```text
netcdf stats_cplda_orca025 {
dimensions:
	areas = 20 ;
	string_length = 64 ;
	depths = 51 ;
	forecasts = 15 ;
	metrics = 9 ;
	time = UNLIMITED ; // (260 currently)
	surface = 1 ;
variables:
	char area_names(areas, string_length) ;
	float depths(depths) ;
	char forecast_names(forecasts, string_length) ;
	float forecasts(forecasts) ;
	char metric_names(metrics, string_length) ;
	float stats_salinity_all(time, forecasts, depths, metrics, areas) ;
	float stats_sla_all(time, forecasts, surface, metrics, areas) ;
	float stats_temperature_all(time, forecasts, depths, metrics, areas) ;
	float time(time) ;
	float stats_sst_drifter(time, forecasts, surface, metrics, areas) ;

// global attributes:
		:institution = "UK Met Office" ;
		:suite_number = 38 ;
		:configuration = "orca025" ;
		:system = "CPLDA" ;
		:contact = "andrew.ryan@metoffice.gov.uk" ;
```
