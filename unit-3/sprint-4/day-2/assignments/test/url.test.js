let url = "https://example.com?foo=1&bar=2";
import searchParams from "./url";

test("Test your url",() =>{
    expect(searchParams(url, "bar")).toBe("2");
});