# Lighthouse Viewer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`
Run npm install before starting

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Creating Lighthouse Reports
Lighthouse Reports are created using the Lighthouse CLI and Lighthouse Batch Reporter

navigate to the src folder and run in the command line:\
`bash report.sh`

## Lighthouse Batch Reporter
to install: `npm i lighthouse-batch`
https://www.npmjs.com/package/lighthouse-batch


## CLI

Example usage

    npx lighthouse-batch -s https://www.bbc.com,https://housing.com

or install globally before use

    npm install lighthouse-batch -g
    lighthouse-batch -s https://www.bbc.com,https://housing.com

There's the option to read site urls from a text file, one per line.

    lighthouse-batch -f sites.txt

Example `sites.txt`:

```text
https://www.bbc.com
https://housing.com
```

#### All options

```console
lighthouse-batch [options]

Options:
  -V, --version                 output the version number
  -s, --sites [sites]           a comma delimited list of site urls to analyze with Lighthouse
  -f, --file [path]             an input file with a site url per-line to analyze with Lighthouse
  -p, --params <params>         extra parameters to pass to lighthouse cli for each execution e.g. -p "--perf --quiet"
  -h, --html                    generate an html report alongside the json report
  --csv                         generate a csv report alongside the json report
  -o, --out [out]               the output folder to place reports, defaults to './report/lighthouse'
  --score <threshold>           average score for each site to meet (1-100)
  --accessibility <threshold>   accessibility score for each site to meet (1-100)
  --best-practices <threshold>  best practices score for each site to meet (1-100)
  --seo <threshold>             seo score for each site to meet (1-100)
  --pwa <threshold>             pwa score for each site to meet (1-100)
  --fail-fast                   fail as soon as a budget threshold is not met
  -g, --use-global              use a global lighthouse install instead of the dependency version
  -v, --verbose                 enable verbose logging
  --no-report                   remove individual json reports for each site
  --print                       print the final summary to stdout
  --help                        output usage information
```

## Notes

- Chrome is run with the following flags to support the widest set of execution
  environments, including docker containers
  `--chrome-flags="--no-sandbox --headless --disable-gpu"`. You can replace
  these with your own by passing `--chrome-flags` as extra parameters. e.g.

  `--params "--chrome-flags=\"--no-sandbox --disable-gpu\""`
  
## Lighthouse CLI
  
## Using the Node CLI

The Node CLI provides the most flexibility in how Lighthouse runs can be configured and reported. Users who want more advanced usage, or want to run Lighthouse in an automated fashion should use the Node CLI.

_Lighthouse requires Node 12 LTS (12.x) or later._

**Installation**:

```sh
npm install -g lighthouse
# or use yarn:
# yarn global add lighthouse
```

**Run it**: `lighthouse https://airhorner.com/`

By default, Lighthouse writes the report to an HTML file. You can control the output format by passing flags.



### CLI options

<!-- To update the help output:
  node lighthouse-cli --help | pbcopy
-->

```
$ lighthouse --help

lighthouse <url> <options>

Logging:
  --verbose  Displays verbose logging  [boolean] [default: false]
  --quiet    Displays no progress, debug logs, or errors  [boolean] [default: false]

Configuration:
  --save-assets                  Save the trace contents & devtools logs to disk  [boolean] [default: false]
  --list-all-audits              Prints a list of all available audits and exits  [boolean] [default: false]
  --list-trace-categories        Prints a list of all required trace categories and exits  [boolean] [default: false]
  --print-config                 Print the normalized config for the given config and options, then exit.  [boolean] [default: false]
  --additional-trace-categories  Additional categories to capture with the trace (comma-delimited).  [string]
  --config-path                  The path to the config JSON.
                                 An example config file: lighthouse-core/config/lr-desktop-config.js  [string]
  --preset                       Use a built-in configuration.
                                 WARNING: If the --config-path flag is provided, this preset will be ignored.  [string] [choices: "perf", "experimental", "desktop"]
  --chrome-flags                 Custom flags to pass to Chrome (space-delimited). For a full list of flags, see https://bit.ly/chrome-flags
                                 Additionally, use the CHROME_PATH environment variable to use a specific Chrome binary. Requires Chromium version 66.0 or later. If omitted, any detected Chrome Canary or Chrome stable will be used.  [string] [default: ""]
  --port                         The port to use for the debugging protocol. Use 0 for a random port  [number] [default: 0]
  --hostname                     The hostname to use for the debugging protocol.  [string] [default: "localhost"]
  --form-factor                  Determines how performance metrics are scored and if mobile-only audits are skipped. For desktop, --preset=desktop instead.  [string] [choices: "mobile", "desktop"]
  --screenEmulation              Sets screen emulation parameters. See also --preset. Use --screenEmulation.disabled to disable. Otherwise set these 4 parameters individually: --screenEmulation.mobile --screenEmulation.width=360 --screenEmulation.height=640 --screenEmulation.deviceScaleFactor=2
  --emulatedUserAgent            Sets useragent emulation  [string]
  --max-wait-for-load            The timeout (in milliseconds) to wait before the page is considered done loading and the run should continue. WARNING: Very high values can lead to large traces and instability  [number]
  --enable-error-reporting       Enables error reporting, overriding any saved preference. --no-enable-error-reporting will do the opposite. More: https://git.io/vFFTO  [boolean]
  --gather-mode, -G              Collect artifacts from a connected browser and save to disk. (Artifacts folder path may optionally be provided). If audit-mode is not also enabled, the run will quit early.
  --audit-mode, -A               Process saved artifacts from disk. (Artifacts folder path may be provided, otherwise defaults to ./latest-run/)
  --only-audits                  Only run the specified audits  [array]
  --only-categories              Only run the specified categories. Available categories: accessibility, best-practices, performance, pwa, seo  [array]
  --skip-audits                  Run everything except these audits  [array]
  --budget-path                  The path to the budget.json file for LightWallet.  [string]

Output:
  --output       Reporter for the results, supports multiple values. choices: "json", "html", "csv"  [array] [default: ["html"]]
  --output-path  The file path to output the results. Use 'stdout' to write to stdout.
                   If using JSON output, default is stdout.
                   If using HTML or CSV output, default is a file in the working directory with a name based on the test URL and date.
                   If using multiple outputs, --output-path is appended with the standard extension for each output type. "reports/my-run" -> "reports/my-run.report.html", "reports/my-run.report.json", etc.
                   Example: --output-path=./lighthouse-results.html  [string]
  --view         Open HTML report in your browser  [boolean] [default: false]

Options:
  --version                            Show version number  [boolean]
  --help                               Show help  [boolean]
  --cli-flags-path                     The path to a JSON file that contains the desired CLI flags to apply. Flags specified at the command line will still override the file-based ones.
  --locale                             The locale/language the report should be formatted in
  --blocked-url-patterns               Block any network requests to the specified URL patterns  [array]
  --disable-storage-reset              Disable clearing the browser cache and other storage APIs before a run  [boolean]
  --throttling-method                  Controls throttling method  [string] [choices: "devtools", "provided", "simulate"]
  --throttling
  --throttling.rttMs                   Controls simulated network RTT (TCP layer)
  --throttling.throughputKbps          Controls simulated network download throughput
  --throttling.requestLatencyMs        Controls emulated network RTT (HTTP layer)
  --throttling.downloadThroughputKbps  Controls emulated network download throughput
  --throttling.uploadThroughputKbps    Controls emulated network upload throughput
  --throttling.cpuSlowdownMultiplier   Controls simulated + emulated CPU throttling
  --extra-headers                      Set extra HTTP Headers to pass with request
  --precomputed-lantern-data-path      Path to the file where lantern simulation data should be read from, overwriting the lantern observed estimates for RTT and server latency.  [string]
  --lantern-data-output-path           Path to the file where lantern simulation data should be written to, can be used in a future run with the `precomputed-lantern-data-path` flag.  [string]
  --plugins                            Run the specified plugins  [array]
  --channel  [string] [default: "cli"]
  --chrome-ignore-default-flags  [boolean] [default: false]

Examples:
  lighthouse <url> --view                                                                          Opens the HTML report in a browser after the run completes
  lighthouse <url> --config-path=./myconfig.js                                                     Runs Lighthouse with your own configuration: custom audits, report generation, etc.
  lighthouse <url> --output=json --output-path=./report.json --save-assets                         Save trace, screenshots, and named JSON report.
  lighthouse <url> --screenEmulation.disabled --throttling-method=provided --no-emulatedUserAgent  Disable device emulation and all throttling
  lighthouse <url> --chrome-flags="--window-size=412,660"                                          Launch Chrome with a specific window size
  lighthouse <url> --quiet --chrome-flags="--headless"                                             Launch Headless Chrome, turn off logging
  lighthouse <url> --extra-headers "{\"Cookie\":\"monster=blue\", \"x-men\":\"wolverine\"}"        Stringify'd JSON HTTP Header key/value pairs to send in requests
  lighthouse <url> --extra-headers=./path/to/file.json                                             Path to JSON file of HTTP Header key/value pairs to send in requests
  lighthouse <url> --only-categories=performance,pwa                                               Only run the specified categories. Available categories: accessibility, best-practices, performance, pwa, seo

For more information on Lighthouse, see https://developers.google.com/web/tools/lighthouse/.
```
