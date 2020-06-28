// okaq xh2o web
// AQ <aq@okaq.com>
// 2020-06-28
package main

import (
	"fmt"
	"net/http"
	"math/rand"
	"time"
)

const (
	INDEX = "xh2o.html"
)

var (
	R *rand.Rand
)

func rando() {
	t0 := time.Now().UnixNano()
	s0 := rand.NewSource(t0)
	R = rand.New(s0)
	fmt.Printf("random: %f\n", R.Float32())
}

func motd() {
	fmt.Println("web serve on $IP:8080")
	fmt.Println(time.Now().String())
}

func XHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	http.ServeFile(w,r,INDEX)
}

func main() {
	rando()
	motd()
	http.HandleFunc("/", XHandler)
	http.ListenAndServe(":8080", nil)
}


