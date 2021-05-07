# Consul Fetcher javascript action

This action retrieves key/values from a Consul and sets it as environment variables

## Inputs

### `url`

**Required** The Consul's Url to retrieve your KV.


### `token`

**Required** The Consul's Token to retrieve your KV. 


### `path`

**Optional** The path where you want retrieve all keys/values from Consul. Default `"/"`.


## Example usage

uses: fduhen/consul-fetcher-action@v1
with:
  url: 'https://consul-url.com'
  token: 'myGeneratedTokenFromConsul'
  path: 'CI'


## TODO
	* [ ] Code cleanup
	* [ ] Correctly managing async functions
	* [ ] Managing status code errors