var search_data = {"index":{"searchIndex":["object","urbanopt","reopt","featurereportadapter","reoptliteapi","reoptrunner","scenarioreportadapter","scenario","reoptscenariocsv","scenariodefaultreoptpostprocessor","check_connection()","new()","new()","new()","new()","new()","new()","reopt_json_from_feature_report()","reopt_json_from_scenario_report()","reopt_jsons_from_scenario_feature_reports()","reopt_request()","run()","run_feature_report()","run_feature_reports()","run_scenario_report()","run_scenario_report_features()","simulation_dirs()","update_feature_report()","update_scenario_report()","update_scenario_report_from_feature_reports()","rdoc_main"],"longSearchIndex":["object","urbanopt","urbanopt::reopt","urbanopt::reopt::featurereportadapter","urbanopt::reopt::reoptliteapi","urbanopt::reopt::reoptrunner","urbanopt::reopt::scenarioreportadapter","urbanopt::scenario","urbanopt::scenario::reoptscenariocsv","urbanopt::scenario::scenariodefaultreoptpostprocessor","urbanopt::reopt::reoptliteapi#check_connection()","urbanopt::reopt::featurereportadapter::new()","urbanopt::reopt::reoptliteapi::new()","urbanopt::reopt::reoptrunner::new()","urbanopt::reopt::scenarioreportadapter::new()","urbanopt::scenario::reoptscenariocsv::new()","urbanopt::scenario::scenariodefaultreoptpostprocessor::new()","urbanopt::reopt::featurereportadapter#reopt_json_from_feature_report()","urbanopt::reopt::scenarioreportadapter#reopt_json_from_scenario_report()","urbanopt::reopt::scenarioreportadapter#reopt_jsons_from_scenario_feature_reports()","urbanopt::reopt::reoptliteapi#reopt_request()","urbanopt::scenario::scenariodefaultreoptpostprocessor#run()","urbanopt::reopt::reoptrunner#run_feature_report()","urbanopt::reopt::reoptrunner#run_feature_reports()","urbanopt::reopt::reoptrunner#run_scenario_report()","urbanopt::reopt::reoptrunner#run_scenario_report_features()","urbanopt::scenario::reoptscenariocsv#simulation_dirs()","urbanopt::reopt::featurereportadapter#update_feature_report()","urbanopt::reopt::scenarioreportadapter#update_scenario_report()","urbanopt::reopt::scenarioreportadapter#update_scenario_report_from_feature_reports()",""],"info":[["Object","","Object.html","",""],["URBANopt","","URBANopt.html","",""],["URBANopt::REopt","","URBANopt/REopt.html","",""],["URBANopt::REopt::FeatureReportAdapter","","URBANopt/REopt/FeatureReportAdapter.html","",""],["URBANopt::REopt::REoptLiteAPI","","URBANopt/REopt/REoptLiteAPI.html","",""],["URBANopt::REopt::REoptRunner","","URBANopt/REopt/REoptRunner.html","",""],["URBANopt::REopt::ScenarioReportAdapter","","URBANopt/REopt/ScenarioReportAdapter.html","",""],["URBANopt::Scenario","","URBANopt/Scenario.html","",""],["URBANopt::Scenario::REoptScenarioCSV","","URBANopt/Scenario/REoptScenarioCSV.html","",""],["URBANopt::Scenario::ScenarioDefaultREoptPostProcessor","","URBANopt/Scenario/ScenarioDefaultREoptPostProcessor.html","",""],["check_connection","URBANopt::REopt::REoptLiteAPI","URBANopt/REopt/REoptLiteAPI.html#method-i-check_connection","(data)","<p>Checks if a optimization task can be submitted to the REopt Lite API\n<p>[<em>parameters:</em>]\n<code>data</code> - <em>Hash</em> - Default ...\n"],["new","URBANopt::REopt::FeatureReportAdapter","URBANopt/REopt/FeatureReportAdapter.html#method-c-new","()","<p>FeatureReportAdapter can convert a URBANopt::Scenario::DefaultReports::FeatureReport into a REopt Lite …\n"],["new","URBANopt::REopt::REoptLiteAPI","URBANopt/REopt/REoptLiteAPI.html#method-c-new","(nreldeveloperkey=nil, use_localhost=false)","<p>REoptLiteAPI manages submitting optimization tasks to the REopt Lite API and recieving results.\nResults ...\n"],["new","URBANopt::REopt::REoptRunner","URBANopt/REopt/REoptRunner.html#method-c-new","(developernrelgovkey=nil, localhost=false)","<p>REoptRunner updates a ScenarioReport or FeatureReport based on REopt Lite optimization response.\n<p>[<em>parameters:</em> …\n"],["new","URBANopt::REopt::ScenarioReportAdapter","URBANopt/REopt/ScenarioReportAdapter.html#method-c-new","()","<p>ScenarioReportAdapter can convert a ScenarioReport into a REopt Lite posts or updates a ScenarioReport …\n"],["new","URBANopt::Scenario::REoptScenarioCSV","URBANopt/Scenario/REoptScenarioCSV.html#method-c-new","(name, root_dir, run_dir, feature_file, mapper_files_dir, csv_file, num_header_rows, reopt_files_dir=nil, scenario_reopt_assumptions_file_name=nil)","<p>ScenarioCSV is a ScenarioBase which assigns a Simulation Mapper to each Feature in a FeatureFile using …\n"],["new","URBANopt::Scenario::ScenarioDefaultREoptPostProcessor","URBANopt/Scenario/ScenarioDefaultREoptPostProcessor.html#method-c-new","(scenario_base)","<p>ScenarioPostProcessorBase post-processes a scenario to create scenario level results\n<p>[<em>parameters:</em>]\n<code>scenario_base</code> ...\n"],["reopt_json_from_feature_report","URBANopt::REopt::FeatureReportAdapter","URBANopt/REopt/FeatureReportAdapter.html#method-i-reopt_json_from_feature_report","(feature_report, reopt_assumptions_hash=nil)","<p>Convert a FeatureReport into a REopt Lite post\n<p>[<em>parameters:</em>]\n<p><code>feature_report</code> - <em>FeatureReport</em> - FeatureReport …\n"],["reopt_json_from_scenario_report","URBANopt::REopt::ScenarioReportAdapter","URBANopt/REopt/ScenarioReportAdapter.html#method-i-reopt_json_from_scenario_report","(scenario_report, reopt_assumptions_json=nil)","<p>Convert a ScenarioReport into a REopt Lite post\n[<em>parameters:</em>]\n<code>scenario_report</code> - <em>ScenarioReport</em> - ScenarioReport ...\n"],["reopt_jsons_from_scenario_feature_reports","URBANopt::REopt::ScenarioReportAdapter","URBANopt/REopt/ScenarioReportAdapter.html#method-i-reopt_jsons_from_scenario_feature_reports","(scenario_report, reopt_assumptions_hashes = [])","<p>Converts a FeatureReport list from a ScenarioReport into an array of REopt Lite posts\n[<em>parameters:</em>]\n ...\n"],["reopt_request","URBANopt::REopt::REoptLiteAPI","URBANopt/REopt/REoptLiteAPI.html#method-i-reopt_request","(reopt_input, filename)","<p>Completes a REopt Lite optimization. From a formatted hash, an optimization task is submitted to the …\n"],["run","URBANopt::Scenario::ScenarioDefaultREoptPostProcessor","URBANopt/Scenario/ScenarioDefaultREoptPostProcessor.html#method-i-run","()","<p>Run the post processor on this Scenario.This will add all the simulation_dirs.\n"],["run_feature_report","URBANopt::REopt::REoptRunner","URBANopt/REopt/REoptRunner.html#method-i-run_feature_report","(feature_report, reopt_assumptions_hash=nil, reopt_output_file=nil,timeseries_csv_path=nil)","<p>Updates a FeatureReport based on an optional set of REopt Lite optimization assumptions.\n<p>[<em>parameters:</em> …\n"],["run_feature_reports","URBANopt::REopt::REoptRunner","URBANopt/REopt/REoptRunner.html#method-i-run_feature_reports","(feature_reports, reopt_assumptions_hashes=[], reopt_output_files=[],timeseries_csv_paths=[])","<p>Updates a set of FeatureReports based on an optional set of REopt Lite optimization assumptions.\n<p>[<em>parameters:</em> …\n"],["run_scenario_report","URBANopt::REopt::REoptRunner","URBANopt/REopt/REoptRunner.html#method-i-run_scenario_report","(scenario_report, reopt_assumptions_hash=nil, reopt_output_file=nil,timeseries_csv_path=nil)","<p>Updates a ScenarioReport based on an optional set of REopt Lite optimization assumptions.\n<p>[<em>parameters:</em> …\n"],["run_scenario_report_features","URBANopt::REopt::REoptRunner","URBANopt/REopt/REoptRunner.html#method-i-run_scenario_report_features","(scenario_report, reopt_assumptions_hashes=[], reopt_output_files=[],feature_report_timeseries_csv_paths=[], scenario_report_timeseries_csv_path=nil)","<p>Updates a ScenarioReport based on an optional set of REopt Lite optimization assumptions.\n<p>[<em>parameters:</em> …\n"],["simulation_dirs","URBANopt::Scenario::REoptScenarioCSV","URBANopt/Scenario/REoptScenarioCSV.html#method-i-simulation_dirs","()","<p>Gets all the simulation directories\n"],["update_feature_report","URBANopt::REopt::FeatureReportAdapter","URBANopt/REopt/FeatureReportAdapter.html#method-i-update_feature_report","(feature_report, reopt_output, timeseries_csv_path=nil)","<p>Update a FeatureReport from a REopt Lite response\n[<em>parameters:</em>]\n<code>feature_report</code> - <em>FeatureReport</em> - FeatureReport ...\n"],["update_scenario_report","URBANopt::REopt::ScenarioReportAdapter","URBANopt/REopt/ScenarioReportAdapter.html#method-i-update_scenario_report","(scenario_report, reopt_output, timeseries_csv_path=nil)","<p>Updates a ScenarioReport from a REopt Lite response\n[<em>parameters:</em>]\n<code>scenario_report</code> - <em>ScenarioReport</em> - ...\n"],["update_scenario_report_from_feature_reports","URBANopt::REopt::ScenarioReportAdapter","URBANopt/REopt/ScenarioReportAdapter.html#method-i-update_scenario_report_from_feature_reports","(scenario_report, feature_reports, timeseries_csv_path=nil)","<p>Updates a ScenarioReport from a set of FeatureReports\n[<em>parameters:</em>]\n<code>scenario_report</code> - <em>ScenarioReport</em> ...\n"],["RDOC_MAIN","","RDOC_MAIN_md.html","","<p>Urbanopt Reopt Gem\n<p>TODO: Add a description of this gem\n<p>Installation\n"]]}}