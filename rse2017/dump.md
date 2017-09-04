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
	float climatology(numobs, numvars, numdeps) ;
	float depth(numobs, numdeps) ;
	float forecast(numobs, numvars, numfcsts, numdeps) ;
	char id(numobs, string_length8) ;
	double juld(numobs) ;
	float latitude(numobs) ;
	double leadtime(numfcsts) ;
	float longitude(numobs) ;
	double modeljuld(numfcsts) ;
	float observation(numobs, numvars, numdeps) ;
	float persistence(numobs, numvars, numfcsts, numdeps) ;
	short qc(numobs, numvars, numdeps) ;
	char type(numobs, string_length128) ;
	char unitname(numvars, string_length8) ;
	char varname(numvars, string_length8) ;

// global attributes:
		:title = "Forecast class 4 file" ;
		:obs_type = "SST" ;
		:institution = "UK Met Office" ;
		:configuration = "orca025" ;
		:suite = "operational" ;
		:version = "12.0" ;
		:system = "FOAM" ;
}
```
