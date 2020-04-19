// webgl grid world
// aq@okaq.com
// 2020-04-16
package main

import (
	"fmt"
	"net/http"
	"math/rand"
	"time"
)

const (
	INDEX = "oran.html"
)

var (
	R *rand.Rand
)

func rng() {
	t0 := time.Now().UnixNano()
	s0 := rand.NewSource(t0)
	R = rand.New(s0)
	fmt.Printf("random: %f\n", R.Float32())
}

func motd() {
	fmt.Println("web serve on $IP:8080")
	fmt.Println(time.Now().String())
}

func OranHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,INDEX)
}

func main() {
	rng()
	motd()
	http.HandleFunc("/", OranHandler)
	http.ListenAndServe(":8080", nil)
}

// web handler for grid world
// max line draw perf test 1fps

