const _data = {
  towers: [[5, 4, 3, 2, 1], [], []],
  positions: ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos0', 'pins1', 'pins2', 'pins3'],
  sounds: [],
  movesMin: 0,
}

const rendering = () => {
  _data.towers.forEach((tower, towerId) => {
    tower.forEach((disks, pos) => {
      let dis = document.querySelector('.disk' + disks)
      _data.positions.forEach(pos => {
        dis.classList.remove(pos)
      })
      dis.classList.add('pins' + (towerId + 1))
      dis.classList.add('pos' + (pos + 1))
    })
  })
  // implementar um contador aqui
}

const move = (inittower, finitower) => {
  let disks = _data.towers[inittower].pop()
  let dis = document.querySelector('.disk' + disks)
  dis.classList.add('pos0')
  _data.towers[finitower].push(disks)
  setTimeout(rendering, 2500)
  var movesCount = console.count()
  console.log(movesCount)
}

const handleClick = () => {
  if (document.getElementById('btn2').onclick) {
    let textarea = document.getElementById('text').value

    if (textarea == "" || textarea == null || textarea == undefined) {
      Swal.fire({
        title: '<strong>Você precisa digitar uma instrução para jogar, meu jovem gafanhoto!</strong>',
        icon: 'warning',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        iconColor: '#3f5ca7',
        confirmButtonColor: '#3f5ca7',
        color: '#30395a',
      })
    }
    else {
      textarea = textarea.replace(/\s/g, '')
      if (textarea == "MOVEATOB") {
        move(0, 1)
        console.log('Movi A pra B')
      }
      if (textarea == "MOVEATOC") {
        move(0, 2)
        console.log('Movi A pra C')
      }
      if (textarea == "MOVEBTOC") {
        move(1, 2)
        console.log('Movi B pra C')
      }
      if (textarea == "MOVEBTOA") {
        move(1, 0)
        console.log('Movi B pra A')
      }
      if (textarea == "MOVECTOA") {
        move(3, 0)
        console.log('Movi C pra A')
      }
      if (textarea == "MOVECTOB") {
        move(3, 2)
        console.log('Movi C pra B')
      }
      else {
        alert('esse movimento é proibido')
      }
    }
  }
}


