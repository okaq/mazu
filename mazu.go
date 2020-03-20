// okaq web server
// wbegl 2.0 vectors
// aq@okaq.com
// 2020-03-17
package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"
)

const (
	INDEX = "mazu.html"
)

var (
	R *rand.Rand
)

func motd() {
	fmt.Println("serving now on $PUBLIC_IP:8080")
	fmt.Println(time.Now().String())
}

func MazuHandler(w http.ResponseWriter, r *http.Request) {
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
	// cache
	http.HandleFunc("/", MazuHandler)
	http.ListenAndServe(":8080", nil)
}


