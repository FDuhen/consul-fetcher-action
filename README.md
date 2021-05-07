# Consul Fetcher javascript action

This action retrieves key/values from a Consul and sets it as environment variables

## Inputs

### `url`

**Required** The Consul's Url to retrieve your KV.


### `token`

**Required** The Consul's Token to retrieve your KV. 


### `path`

**Required** The path where you want retrieve all your keys/values from Consul. Could be the path to a folder or the complete path to a single key.


## Example usage

```
uses: fduhen/consul-fetcher-action@v1
with:
  url: 'https://consul-url.com'
  token: 'myGeneratedTokenFromConsul'
  path: 'CI'
```

## TODO
	* [ ] Code cleanup
	* [ ] Correctly managing async functions
	* [ ] Managing status code errors