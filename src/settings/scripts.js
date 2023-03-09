let towers = [[1, 2, 3, 4, 5], [], []];
let positions = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos', 'pins1', 'pins2', 'pins3'];

export function render() {
  towers.forEach((tower, towerId) => {
    console.log(tower, towerId);
    tower.forEach((disks, pos) => {
      let dis = document.querySelector('.disk' + disks);
      positions.forEach(pos => {
        dis.classList.remove(pos);
      })
      dis.classList.add('pins' + (towerId + 1));
      dis.classList.add('pos' + (pos + 1));
    });
  });
};

export function movesDisk(inittower, finitower) {
  let disks = towers[inittower].pop();
  let dis = document.querySelector('.disk' + disks);
  dis.classList.add('pos');
  towers[finitower].push(disks);
  setTimeout(render, 2000);
}

