// webgl 2.0 grid
// aq@okaq.com
// 2020-04-03
package main

import (
	"fmt"
	"net/http"
	"math/rand"
	"time"
)

const (
	INDEX = "nazu.html"
)

var (
	R *rand.Rand
)

func motd() {
	fmt.Println("web serve on $IP:8080")
	fmt.Println(time.Now().String())
}

func NazuHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,INDEX)
}

func rng() {
	R = rand.New(rand.NewSource(time.Now().UnixNano()))
	fmt.Printf("rng: %f\n", R.Float32())
}

func main() {
	motd()
	rng()
	http.HandleFunc("/", NazuHandler)
	http.ListenAndServe(":8080", nil)
}
