const text = document.querySelectorAll('.text');
const link = document.querySelectorAll('.link');
const container = document.querySelectorAll('.container');

text.forEach((t) => {
	if (t.classList.contains('satu')) {
		typeWriting('Hay, Calon istri aku',t);
	}
});

link.forEach((a) => {
	a.addEventListener('click', (e) => {
		e.preventDefault()
		if (e.target.parentElement.classList.contains('satu')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('dua')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('dua')) {
								typeWriting('Ayang aku minta maaf banget',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('dua')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('tiga')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('tiga')) {
								typeWriting('Akunya kebangun kesiangan sayang',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('tiga')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('empat')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('empat')) {
								typeWriting('Padahal aku pengen banget nganterin ayang',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('empat')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('lima')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('lima')) {
								typeWriting('Pliss ayang maapin aku yah sayang aku',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('lima')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('enam')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('enam')) {
								typeWriting('Pokoknya besok aku anterin ayang titik',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('enam')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('tujuh')) {
						c.classList.remove('none');	
					}
					setTimeout(() => {
					c.classList.add('none')
						if (c.classList.contains('delapan')) {
							c.classList.remove('none');
							text.forEach((t) => {
							if (t.classList.contains('delapan')) {
								typeWriting('Aku kangen banget sama ayang',t)
							}
						})
						}
					},5500)
				},500)
			})
		} else if(e.target.parentElement.classList.contains('delapan')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('sembilan')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('sembilan')) {
								typeWriting('Aku kangen jalan-jalan sama ayang',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('sembilan')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('sepuluh')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('sepuluh')) {
								typeWriting('Aku kangen makan bareng sama ayang',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('sepuluh')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('sebelas')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('sebelas')) {
								typeWriting('Aku kangen dimanjain sama ayang',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('sebelas')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('duabelas')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('duabelas')) {
								typeWriting('Aku kangen ngobrol sama ayang',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('duabelas')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('tigabelas')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('tigabelas')) {
								typeWriting('Pokoknya kangen semuanya sayang aku',t)
							}
						})
					}
				},500)
			})
		} else if(e.target.parentElement.classList.contains('tigabelas')) {
			container.forEach((c) => {
				setTimeout(() => {
					c.classList.add('none');
					if (c.classList.contains('empatbelas')) {
						c.classList.remove('none');
						text.forEach((t) => {
							if (t.classList.contains('empatbelas')) {
								typeWriting('I LOVE YOU AYANG AKU CINTA AKU TERSAYANG BANGET',t)
							}
						})
						setTimeout(() => {
							const Toast = Swal.mixin({
							  toast: true,
							  position: "top",
							  showConfirmButton: false,
							  timer: 3000,
							  timerProgressBar: true,
							  didOpen: (toast) => {
							    toast.onmouseenter = Swal.stopTimer;
							    toast.onmouseleave = Swal.resumeTimer;
							  }
							});
							Toast.fire({
							  title: "<div class='d-flex'><h3 class='tillana'>I Miss you ayang</h3><i class='bx bxs-heart btn-heart'></i></div>"
							});
						},3000)
					}
				},500)
			})
		}
	});
})






function typeWriting(isiText,text) {
	let put = 0;

	let interval = setInterval(() => {
		text.innerHTML = isiText.slice(0, put);
		put++;
		
		if (put == (text.length+1)) {
			clearInterval(interval);
		}

	},100);
}


