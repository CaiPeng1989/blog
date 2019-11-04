## URLSearchParamsFormatter

```js
function URLSearchParamsFormatter (url = '') {
  const canUseURLSearchParams = typeof window !== `undefined` && typeof URLSearchParams === `function`

  if (canUseURLSearchParams) {
    URLSearchParamsFormatter = function (url) {
      let params = {}

      if (!url) {
        return params
      }

      const search = url.split(`?`)[1]

      if (!search) {
        return params
      }

      searchParams = new URLSearchParams(search).entries()

      for (const param of searchParams) {
        params[param[0]] = param[1]
      }

      return params
    }
  } else {
    URLSearchParamsFormatter = function (url) {
      let params = {}

      if (!url) {
        return params
      }

      const search = url.split(`?`)[1]

      if (!search) {
        return params
      }

      search.split(`&`).forEach(item => {
        const arr = item.split(`=`)
        params[arr[0]] = arr[1]
      })

      return params
    }
  }

  return URLSearchParamsFormatter(url)
}
```
