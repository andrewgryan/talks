## NetCDF Class 4 format

Defined variable names, dimensions and meta-data

```
netcdf class4_20170823_FOAM_orca025_12.0_SST {
dimensions:
	numobs = 26673 ;
	numvars = 1 ;
	numdeps = 1 ;
	numfcsts = 6 ;
	string_length8 = 8 ;
	string_length128 = 128 ;
variables:
	float best_estimate(numobs, numvars, numdeps) ;
		best_estimate:_FillValue = 99999.f ;
		best_estimate:long_name = "Best estimate" ;
		best_estimate:comment = "FOAM daym2 field" ;
	float climatology(numobs, numvars, numdeps) ;
		climatology:_FillValue = 99999.f ;
		climatology:long_name = "Climatological value" ;
		climatology:comment = "Levitus monthly fields interpolated to the correct day" ;
	float depth(numobs, numdeps) ;
		depth:_FillValue = 99999.f ;
		depth:long_name = "Depths" ;
		depth:units = "metre" ;
	float forecast(numobs, numvars, numfcsts, numdeps) ;
		forecast:_FillValue = 99999.f ;
		forecast:long_name = "Model forecast counterpart of obs. value" ;
		forecast:comment = "Model daily mean valid at noon used for calculation" ;
	char id(numobs, string_length8) ;
		id:long_name = "Observation id" ;
	double juld(numobs) ;
		juld:_FillValue = 99999. ;
		juld:long_name = "Observation time in Julian days" ;
		juld:units = "Days since 1950-01-01 00:00:00 utc" ;
	float latitude(numobs) ;
		latitude:long_name = "Latitudes" ;
		latitude:units = "Degrees" ;
	double leadtime(numfcsts) ;
		leadtime:long_name = "Model forecast day offset" ;
		leadtime:units = "Hours" ;
		leadtime:comment = "Hours between forecast production and validity time" ;
	float longitude(numobs) ;
		longitude:long_name = "Longitudes" ;
		longitude:units = "Degrees" ;
	double modeljuld(numfcsts) ;
		modeljuld:long_name = "Model field date in Julian days" ;
		modeljuld:units = "Days since 1950-01-01 00:00:00 utc" ;
	float observation(numobs, numvars, numdeps) ;
		observation:_FillValue = 99999.f ;
		observation:long_name = "Observation value" ;
	float persistence(numobs, numvars, numfcsts, numdeps) ;
		persistence:_FillValue = 99999.f ;
		persistence:long_name = "Model persistence counterpart of obs. value" ;
		persistence:comment = "Model daily mean valid at noon used for calculation" ;
	short qc(numobs, numvars, numdeps) ;
		qc:_FillValue = -32767s ;
		qc:long_name = "Quality flags" ;
		qc:flag_value = 0, 1 ;
		qc:flag_meaning = "0 - good data. 1 - bad data." ;
		qc:comment = "In situ qc flag set to 0 if prob. of gross error < 0.5, 1 otherwise. AATSR qc flag set to 0 for best_quality, 1 otherwise." ;
	char type(numobs, string_length128) ;
		type:long_name = "Observation type" ;
	char unitname(numvars, string_length8) ;
		unitname:long_name = "Unit name" ;
	char varname(numvars, string_length8) ;
		varname:long_name = "Variable name" ;

// global attributes:
		:title = "Forecast class 4 file" ;
		:creation_date = "2017-08-28 19:02:52 utc" ;
		:contact = "andrew.ryan@metoffice.gov.uk" ;
		:obs_type = "SST" ;
		:institution = "UK Met Office" ;
		:best_estimate_description = "analysis produced 2 days behind real time" ;
		:time_interp = "daily average fields" ;
		:configuration = "orca025" ;
		:validity_time = "2017-08-23 12:00:00 utc" ;
		:suite = "operational" ;
		:version = "12.0" ;
		:system = "FOAM" ;
		:sst_generation_method = "0.5m temperature" ;
}
```
