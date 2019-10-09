// Arms placeholder component

const VERSION = '0.0.0';
import { Component, AutoIKComponent } from './ik.component.js';
import { AutoIKChain, walkBoneChain } from './AutoIKChain.js';

class Arm extends AutoIKComponent {
  static get version() { return VERSION; }
  constructor(rig, options) {
    super(rig, options);
    // this.from = rig.getBone(options.from);
    // this.to = rig.getBone(options.to);
    // this.target = options.target;
    // this.boneChain = walkBoneChain(this.from, this.to);
    // if (!this.boneChain.valid) throw new Error('invalid Arm bone chain: '+ [options.from, options.to]);
    // this.ik = new AutoIKChain(this.boneChain.lineage, this.target, this.options);
  }
  // preSolve(time, deltaTime) {
  //     this.ik.tick(time, deltaTime);
  // }
  // tick(time, deltaTime) {
  //   // TODO: attempted "roll" correction to mitigate THREE.IK could go here
  //     //this.ik.tick(time, deltaTime);
  // }
  // postSolve(time, deltaTime) {
  //     this.ik.syncTail(time, deltaTime);
  // }
};

class Arms extends Component {
  static get version() { return VERSION; }
  constructor(rig, options) {
    super(rig, options);
    this.left = new Arm(rig, options.left);
    this.right = new Arm(rig, options.right);
  }
  tick(time, deltaTime) {
      this.left.tick(time, deltaTime);
      this.right.tick(time, deltaTime);
      // TODO: could maybe attempt some "roll" correction here to mitigate THREE.IK effects
  }
  preSolve(time, deltaTime) {
    this.left.preSolve(time, deltaTime);
    this.right.preSolve(time, deltaTime);
  }
  postSolve(time, deltaTime) {
    this.left.postSolve(time, deltaTime);
    this.right.postSolve(time, deltaTime);
  }
}

export default Arms;
export { Arm, Arms };
