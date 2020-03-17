// okaq web server
// wbegl 2.0 vectors
// aq@okaq.com
// 2020-03-17
package main

import (
	"fmt"
	"time"
)

func motd() {
	fmt.Println("serving now on $PUBLIC_IP:8080")
	fmt.Println(time.Now().String())
}

func main() {
	motd()
	// rand
	// cache
}


