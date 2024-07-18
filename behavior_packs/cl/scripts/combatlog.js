var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@minecraft/math/lib/general/clamp.js
var require_clamp = __commonJS({
  "node_modules/@minecraft/math/lib/general/clamp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clampNumber = void 0;
    function clampNumber(val, min, max) {
      return Math.min(Math.max(val, min), max);
    }
    exports.clampNumber = clampNumber;
  }
});

// node_modules/@minecraft/math/lib/vector3/coreHelpers.js
var require_coreHelpers = __commonJS({
  "node_modules/@minecraft/math/lib/vector3/coreHelpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VECTOR3_SOUTH = exports.VECTOR3_NORTH = exports.VECTOR3_EAST = exports.VECTOR3_WEST = exports.VECTOR3_ZERO = exports.VECTOR3_ONE = exports.VECTOR3_BACK = exports.VECTOR3_FORWARD = exports.VECTOR3_RIGHT = exports.VECTOR3_LEFT = exports.VECTOR3_DOWN = exports.VECTOR3_UP = exports.Vector2Utils = exports.Vector3Utils = void 0;
    var clamp_1 = require_clamp();
    var Vector3Utils2 = class _Vector3Utils {
      /**
       * equals
       *
       * Check the equality of two vectors
       */
      static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
      }
      /**
       * add
       *
       * Add two vectors to produce a new vector
       */
      static add(v1, v2) {
        return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
      }
      /**
       * subtract
       *
       * Subtract two vectors to produce a new vector (v1-v2)
       */
      static subtract(v1, v2) {
        return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
      }
      /** scale
       *
       * Multiple all entries in a vector by a single scalar value producing a new vector
       */
      static scale(v1, scale) {
        return { x: v1.x * scale, y: v1.y * scale, z: v1.z * scale };
      }
      /**
       * dot
       *
       * Calculate the dot product of two vectors
       */
      static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
      }
      /**
       * cross
       *
       * Calculate the cross product of two vectors. Returns a new vector.
       */
      static cross(a, b) {
        return {
          x: a.y * b.z - a.z * b.y,
          y: a.z * b.x - a.x * b.z,
          z: a.x * b.y - a.y * b.x
        };
      }
      /**
       * magnitude
       *
       * The magnitude of a vector
       */
      static magnitude(v) {
        return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
      }
      /**
       * distance
       *
       * Calculate the distance between two vectors
       */
      static distance(a, b) {
        return _Vector3Utils.magnitude(_Vector3Utils.subtract(a, b));
      }
      /**
       * normalize
       *
       * Takes a vector 3 and normalizes it to a unit vector
       */
      static normalize(v) {
        const mag = _Vector3Utils.magnitude(v);
        return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
      }
      /**
       * floor
       *
       * Floor the components of a vector to produce a new vector
       */
      static floor(v) {
        return { x: Math.floor(v.x), y: Math.floor(v.y), z: Math.floor(v.z) };
      }
      /**
       * toString
       *
       * Create a string representation of a vector3
       */
      static toString(v, options) {
        const decimals = options?.decimals ?? 2;
        const str = [v.x.toFixed(decimals), v.y.toFixed(decimals), v.z.toFixed(decimals)];
        return str.join(options?.delimiter ?? ", ");
      }
      /**
       * clamp
       *
       * Clamps the components of a vector to limits to produce a new vector
       */
      static clamp(v, limits) {
        return {
          x: (0, clamp_1.clampNumber)(v.x, limits?.min?.x ?? Number.MIN_SAFE_INTEGER, limits?.max?.x ?? Number.MAX_SAFE_INTEGER),
          y: (0, clamp_1.clampNumber)(v.y, limits?.min?.y ?? Number.MIN_SAFE_INTEGER, limits?.max?.y ?? Number.MAX_SAFE_INTEGER),
          z: (0, clamp_1.clampNumber)(v.z, limits?.min?.z ?? Number.MIN_SAFE_INTEGER, limits?.max?.z ?? Number.MAX_SAFE_INTEGER)
        };
      }
      /**
       * lerp
       *
       * Constructs a new vector using linear interpolation on each component from two vectors.
       */
      static lerp(a, b, t) {
        return {
          x: a.x + (b.x - a.x) * t,
          y: a.y + (b.y - a.y) * t,
          z: a.z + (b.z - a.z) * t
        };
      }
      /**
       * slerp
       *
       * Constructs a new vector using spherical linear interpolation on each component from two vectors.
       */
      static slerp(a, b, t) {
        const theta = Math.acos(_Vector3Utils.dot(a, b));
        const sinTheta = Math.sin(theta);
        const ta = Math.sin((1 - t) * theta) / sinTheta;
        const tb = Math.sin(t * theta) / sinTheta;
        return _Vector3Utils.add(_Vector3Utils.scale(a, ta), _Vector3Utils.scale(b, tb));
      }
    };
    exports.Vector3Utils = Vector3Utils2;
    var Vector2Utils2 = class {
      /**
       * toString
       *
       * Create a string representation of a vector2
       */
      static toString(v, options) {
        const decimals = options?.decimals ?? 2;
        const str = [v.x.toFixed(decimals), v.y.toFixed(decimals)];
        return str.join(options?.delimiter ?? ", ");
      }
    };
    exports.Vector2Utils = Vector2Utils2;
    exports.VECTOR3_UP = { x: 0, y: 1, z: 0 };
    exports.VECTOR3_DOWN = { x: 0, y: -1, z: 0 };
    exports.VECTOR3_LEFT = { x: -1, y: 0, z: 0 };
    exports.VECTOR3_RIGHT = { x: 1, y: 0, z: 0 };
    exports.VECTOR3_FORWARD = { x: 0, y: 0, z: 1 };
    exports.VECTOR3_BACK = { x: 0, y: 0, z: -1 };
    exports.VECTOR3_ONE = { x: 1, y: 1, z: 1 };
    exports.VECTOR3_ZERO = { x: 0, y: 0, z: 0 };
    exports.VECTOR3_WEST = { x: -1, y: 0, z: 0 };
    exports.VECTOR3_EAST = { x: 1, y: 0, z: 0 };
    exports.VECTOR3_NORTH = { x: 0, y: 0, z: 1 };
    exports.VECTOR3_SOUTH = { x: 0, y: 0, z: -1 };
  }
});

// node_modules/@minecraft/math/lib/vector3/vectorWrapper.js
var require_vectorWrapper = __commonJS({
  "node_modules/@minecraft/math/lib/vector3/vectorWrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector2Builder = exports.Vector3Builder = void 0;
    var coreHelpers_1 = require_coreHelpers();
    var Vector3Builder2 = class {
      constructor(first, y, z) {
        if (typeof first === "object") {
          this.x = first.x;
          this.y = first.y;
          this.z = first.z;
        } else {
          this.x = first;
          this.y = y ?? 0;
          this.z = z ?? 0;
        }
      }
      /**
       * Assigns the values of the passed in vector to this vector. Returns itself.
       */
      assign(vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
      }
      /**
       * equals
       *
       * Check the equality of two vectors
       */
      equals(v) {
        return coreHelpers_1.Vector3Utils.equals(this, v);
      }
      /**
       * add
       *
       * Adds the vector v to this, returning itself.
       */
      add(v) {
        return this.assign(coreHelpers_1.Vector3Utils.add(this, v));
      }
      /**
       * subtract
       *
       * Subtracts the vector v from this, returning itself.
       */
      subtract(v) {
        return this.assign(coreHelpers_1.Vector3Utils.subtract(this, v));
      }
      /** scale
       *
       * Scales this by the passed in value, returning itself.
       */
      scale(val) {
        return this.assign(coreHelpers_1.Vector3Utils.scale(this, val));
      }
      /**
       * dot
       *
       * Computes the dot product of this and the passed in vector.
       */
      dot(vec) {
        return coreHelpers_1.Vector3Utils.dot(this, vec);
      }
      /**
       * cross
       *
       * Computes the cross product of this and the passed in vector, returning itself.
       */
      cross(vec) {
        return this.assign(coreHelpers_1.Vector3Utils.cross(this, vec));
      }
      /**
       * magnitude
       *
       * The magnitude of the vector
       */
      magnitude() {
        return coreHelpers_1.Vector3Utils.magnitude(this);
      }
      /**
       * distance
       *
       * Calculate the distance between two vectors
       */
      distance(vec) {
        return coreHelpers_1.Vector3Utils.distance(this, vec);
      }
      /**
       * normalize
       *
       * Normalizes this vector, returning itself.
       */
      normalize() {
        return this.assign(coreHelpers_1.Vector3Utils.normalize(this));
      }
      /**
       * floor
       *
       * Floor the components of a vector to produce a new vector
       */
      floor() {
        return this.assign(coreHelpers_1.Vector3Utils.floor(this));
      }
      /**
       * toString
       *
       * Create a string representation of a vector
       */
      toString(options) {
        return coreHelpers_1.Vector3Utils.toString(this, options);
      }
      /**
       * clamp
       *
       * Clamps the components of a vector to limits to produce a new vector
       */
      clamp(limits) {
        return this.assign(coreHelpers_1.Vector3Utils.clamp(this, limits));
      }
      /**
       * lerp
       *
       * Constructs a new vector using linear interpolation on each component from two vectors.
       */
      lerp(vec, t) {
        return this.assign(coreHelpers_1.Vector3Utils.lerp(this, vec, t));
      }
      /**
       * slerp
       *
       * Constructs a new vector using spherical linear interpolation on each component from two vectors.
       */
      slerp(vec, t) {
        return this.assign(coreHelpers_1.Vector3Utils.slerp(this, vec, t));
      }
    };
    exports.Vector3Builder = Vector3Builder2;
    var Vector2Builder2 = class {
      constructor(first, y) {
        if (typeof first === "object") {
          this.x = first.x;
          this.y = first.y;
        } else {
          this.x = first;
          this.y = y ?? 0;
        }
      }
      toString(options) {
        return coreHelpers_1.Vector2Utils.toString(this, options);
      }
    };
    exports.Vector2Builder = Vector2Builder2;
  }
});

// node_modules/@minecraft/math/lib/vector3/index.js
var require_vector3 = __commonJS({
  "node_modules/@minecraft/math/lib/vector3/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
          enumerable: true, get: function () {
            return m[k];
          }
        };
      }
      Object.defineProperty(o, k2, desc);
    } : function (o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function (m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_coreHelpers(), exports);
    __exportStar(require_vectorWrapper(), exports);
  }
});

// node_modules/@minecraft/math/lib/general/index.js
var require_general = __commonJS({
  "node_modules/@minecraft/math/lib/general/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
          enumerable: true, get: function () {
            return m[k];
          }
        };
      }
      Object.defineProperty(o, k2, desc);
    } : function (o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function (m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_clamp(), exports);
  }
});

// node_modules/@minecraft/math/lib/index.js
var require_lib = __commonJS({
  "node_modules/@minecraft/math/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
          enumerable: true, get: function () {
            return m[k];
          }
        };
      }
      Object.defineProperty(o, k2, desc);
    } : function (o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function (m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_vector3(), exports);
    __exportStar(require_general(), exports);
  }
});

// src/combatlog.ts
import { world as world5, system as system3, ItemStack as ItemStack2, EquipmentSlot, GameMode } from "@minecraft/server";

// src/stuff/config.ts
var config = {
  prefix: "==",
  staffTag: "cl-staff"
};

// src/stuff/commonUtils.ts
import { system as system2, world as world2 } from "@minecraft/server";

// src/stuff/handler.ts
import { system, world } from "@minecraft/server";
var Command = class _Command {
  static commands = [];
  constructor(commandInfo) {
    if (!_Command.commands.includes(commandInfo))
      _Command.commands.push(commandInfo);
  }
};
var commands = Command.commands;
world.beforeEvents.chatSend.subscribe((data) => {
  if (data.message.startsWith(config.prefix)) {
    data.cancel = true;
    const args = data.message.slice(config.prefix.length).toLowerCase().split(/\s+/g);
    const command = args.shift();
    const cmdData = commands.find((c) => c.name.toLowerCase() === command.toLowerCase() || c.aliases?.includes(command.toLowerCase()));
    if (!cmdData)
      return sendPlayerMessage(data.sender, `\xA7cUnknown command: ${command}. Do ${config.prefix}help for a list of commands`);
    if (cmdData.staffOnly && !data.sender.hasTag(config.staffTag) && !data.sender.isOp())
      return sendPlayerMessage(data.sender, `\xA7cYou do not have permission to run this command!`);
    const player = data.sender;
    if (!cmdData.helpMenu)
      cmdData.helpMenu = `\xA7cThere is no available help menu, this is a bug and should be reported to GamerDos. He probably forgot to put a help menu because hes stupid lmao (Discord: https://dsc.gg/gamerdos). Anyway heres a placeholder help menu:

Command Name: ${cmdData.name}
Staff Only: ${cmdData.staffOnly}
Command aliases: [
    ${cmdData.aliases?.join(`
    `) ?? `none`}
]`;
    system.run(() => {
      cmdData.code({ player, args, cmdData });
    });
  }
});

// src/stuff/commonUtils.ts
function sendPlayerMessage(player, message, removeSpaces = false) {
  if (removeSpaces) {
    player.sendMessage(`${message.replaceAll(/(\r\n|\r|\n)/g, `
`).replaceAll(/  +/g, ``)}`);
  } else {
    player.sendMessage(`${message}`);
  }
}
function sendAllMessage2(message, removeSpaces = false, requiredTag) {
  if (removeSpaces) {
    for (let player of world2.getAllPlayers()) {
      if (requiredTag && !player.hasTag(requiredTag))
        continue;
      player.sendMessage(`${message.replaceAll(/(\r\n|\r|\n)/g, `
`).replaceAll(/  +/g, ``)}`);
    }
  } else {
    for (let player of world2.getAllPlayers()) {
      if (requiredTag && !player.hasTag(requiredTag))
        continue;
      player.sendMessage(`${message}`);
    }
  }
}
function helpMoreInfo(player, args) {
  const cmdData = commands.find((c) => c.name.toLowerCase() === args[0]?.toLowerCase() || c.aliases?.includes(args[0]?.toLowerCase()));
  if (cmdData) {
    if ((cmdData.staffOnly || cmdData.altHelpMenu) && !(player.isOp() || player.hasTag(`lifesteal-opped`))) {
      sendPlayerMessage(player, `\xA7cYou do not have permission to do this!`);
      return true;
    }
    if ((cmdData.staffOnly || cmdData.altHelpMenu) && cmdData.helpMenu && cmdData.helpMenu !== `none`) {
      cmdData.helpMenu = cmdData.helpMenu.replaceAll(`\xA7e`, `\xA79`).replaceAll(`\xA7g`, `\xA7u`);
    }
    if (cmdData.altHelpMenu && !(player.isOp() || player.hasTag(`lifesteal-opped`))) {
      sendPlayerMessage(player, `${cmdData.altHelpMenu}`);
      return true;
    }
    if (!cmdData.helpMenu) {
      sendPlayerMessage(player, `\xA7cThere is no available help menu, this is a bug and should be reported to GamerDos. He probably forgot to put a help menu because hes stupid lmao (Discord: https://dsc.gg/gamerdos). Anyway heres a placeholder help menu:

Command Name: ${cmdData.name}
Staff Only: ${cmdData.staffOnly}
Command aliases: [
    ${cmdData.aliases?.join(`
    `) ?? `none`}
]`);
      return true;
    }
    if (cmdData.helpMenu === `none`) {
      sendPlayerMessage(player, `\xA7cNo help menu available for this command! (${config.prefix}${args[0]})`);
      return true;
    }
    sendPlayerMessage(player, `${cmdData.helpMenu}`);
    return true;
  }
  return false;
}
function getScore(player, objective) {
  try {
    return world2.scoreboard.getObjective(objective)?.getScore(player.scoreboardIdentity);
  } catch {
  }
  return void 0;
}
function addScore(player, objective, amount) {
  return world2.scoreboard.getObjective(objective).addScore(player.scoreboardIdentity, amount);
}

// src/database.ts
import { world as world3 } from "@minecraft/server";
var objArrSignature = "gmson";
var Database = class {
  dynamicProperty;
  localState = /* @__PURE__ */ new Map();
  /**
   * @name setValue
   * @param {string} key The key string in which the value will be set in the local state.
   * @param {any} value The value string, number, or boolean from the dynamic property which will be set in the local state.
   * @remarks Sets the value with its key in the local state.
   */
  setValue(key, value) {
    if (typeof value === "string") {
      const parsedValue = this.parseValue(value);
      this.localState.set(key, parsedValue);
    } else
      this.localState.set(key, value);
  }
  /**
   * @name parseValue
   * @param {string} value The string value which needs to be checks if it is an array or an object.
   * @remarks Parses the stringify array or object value to an array or an object if it has the signature.
   * @returns {string | object | any[]} Returns an object or an array if the value is actually stringify object or array, and has signature. Otherwise returns the string value.
   */
  parseValue(value) {
    try {
      const parsedValue = JSON.parse(value);
      if (Array.isArray(parsedValue)) {
        const lastElement = parsedValue.pop();
        if (lastElement && lastElement.startsWith("papiDatabase:") && lastElement.endsWith(objArrSignature))
          return parsedValue;
        else
          return value;
      } else if (typeof parsedValue === "object" && parsedValue.papiDatabase === objArrSignature) {
        delete parsedValue.papiDatabase;
        return parsedValue;
      } else
        return value;
    } catch {
      return value;
    }
  }
  /**
   * @name constructor
   * @param {string} id An identifier string for the database.
   */
  constructor(id) {
    this.dynamicProperty = id;
  }
  /**
  * @name size
  * @returns {number} Returns the number of keys in the database.
  */
  get size() {
    const allDynamicPropertyKeys = world3.getDynamicPropertyIds().filter((property) => property.startsWith(`${this.dynamicProperty}:`));
    return allDynamicPropertyKeys.length;
  }
  /**
   * @name clear
   * @remarks Clears every keys and its value in the database.
   */
  clear() {
    const allDynamicPropertyKeys = world3.getDynamicPropertyIds().filter((property) => property.startsWith(`${this.dynamicProperty}:`));
    for (const key of allDynamicPropertyKeys)
      world3.setDynamicProperty(key, void 0);
    this.localState.clear();
  }
  /**
   * @name delete
   * @param {string} key The database key string which needs to be deleted.
   * @remarks Deletes the key from the database.
   */
  delete(key) {
    world3.setDynamicProperty(`${this.dynamicProperty}:${key}`, void 0);
    this.localState.delete(key);
  }
  /**
   * @name get
   * @param {string} key The key string of the value to return.
   * @returns {any | object | any[] | undefined} Returns the value string, number, boolean, object, or array associated with the specified key. If no value is associated with the specified key, undefined is returned.
   */
  get(key) {
    if (!this.localState.has(key)) {
      const value = world3.getDynamicProperty(`${this.dynamicProperty}:${key}`);
      if (value !== void 0)
        this.setValue(key, value);
      else
        return void 0;
    }
    return this.localState.get(key);
  }
  /**
   * @name has
   * @param {string} key The key string which needs to be check if it exists in the database or not.
   * @returns {boolean} Returns true if the key is found in the database, otherwise returns false.
   */
  has(key) {
    if (this.localState.has(key))
      return true;
    else
      return world3.getDynamicProperty(`${this.dynamicProperty}:${key}`) !== void 0;
  }
  /**
   * @name set
   * @param {string} key The key string in which the new value will get set.
   * @param {any | object | any[]} value The value string, number, boolean, object, or array which will be set in the key.
   * @remarks The value provided which will get set in the key provided in the database.
   * @throws Throws RangeError if the string value, or stringify array or object is more than 32767 characters.
   */
  set(key, value) {
    if (this.localState.get(key) === value)
      return;
    if (typeof value === "string" && value.length > 32767)
      throw new RangeError(`Database::set only accepts a string value less than 32767 characters.`);
    if (typeof value !== "object")
      world3.setDynamicProperty(`${this.dynamicProperty}:${key}`, value);
    else if (Array.isArray(value)) {
      const arrSignatureId = `papiDatabase:${objArrSignature}`;
      const newValue = [...value, arrSignatureId];
      const stringify = JSON.stringify(newValue);
      if (stringify.length > 32767)
        throw new RangeError(`Database::set only accepts a stringify array value less than ${32767 - (5 + arrSignatureId.length)} characters.`);
      world3.setDynamicProperty(`${this.dynamicProperty}:${key}`, stringify);
    } else {
      const newValue = {
        ...value,
        ["papiDatabase"]: objArrSignature
      };
      const stringify = JSON.stringify(newValue);
      if (stringify.length > 32767)
        throw new RangeError(`Database::set only accepts a stringify object value less than ${32767 - (16 + objArrSignature.length)} characters.`);
      world3.setDynamicProperty(`${this.dynamicProperty}:${key}`, stringify);
    }
    this.localState.set(key, value);
  }
  /**
   * @name entries
   * @returns {IterableIterator<[string, any | object | any[]]>} Returns an iterable of keys string array, and values string, number, boolean, array, or object array pairs for every keys in the database.
   */
  *entries() {
    const dynamicPropertyId = `${this.dynamicProperty}:`;
    const allDynamicPropertyKeys = world3.getDynamicPropertyIds().filter((property) => property.startsWith(dynamicPropertyId));
    for (const key of allDynamicPropertyKeys) {
      const slicedKey = key.slice(dynamicPropertyId.length);
      let value;
      if (this.localState.has(slicedKey))
        value = this.localState.get(slicedKey);
      else {
        value = world3.getDynamicProperty(key);
        if (typeof value === "string")
          value = this.parseValue(value);
      }
      yield [slicedKey, value];
    }
  }
  /**
   * @name keys
   * @returns {IterableIterator<string>} Returns an iterable of keys string in the database.
   */
  *keys() {
    const dynamicPropertyId = `${this.dynamicProperty}:`;
    const allDynamicPropertyKeys = world3.getDynamicPropertyIds().filter((property) => property.startsWith(dynamicPropertyId));
    for (const key of allDynamicPropertyKeys) {
      const slicedKey = key.slice(dynamicPropertyId.length);
      yield slicedKey;
    }
  }
  /**
   * @name values
   * @returns {IterableIterator<any | object | any[]>} Returns an iterable of values string, number, boolean, object, or array in the database.
   */
  *values() {
    const dynamicPropertyId = `${this.dynamicProperty}:`;
    const allDynamicPropertyKeys = world3.getDynamicPropertyIds().filter((property) => property.startsWith(dynamicPropertyId));
    for (const key of allDynamicPropertyKeys) {
      const slicedKey = key.slice(dynamicPropertyId.length);
      let value;
      if (this.localState.has(slicedKey))
        value = this.localState.get(slicedKey);
      else {
        value = world3.getDynamicProperty(key);
        if (typeof value === "string")
          value = this.parseValue(value);
      }
      yield value;
    }
  }
};

// src/combatlog.ts
var import_math = __toESM(require_lib());

// src/combatlog/commands/check.ts
new Command({
  name: `check`,
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- check\xA7r\xA7g
> Check if you are combat logged

> Usage: ${config.prefix}check

> Examples: [
    ${config.prefix}check
]`,
  code({ player, args }) {
    let combatscore = getScore(player, `combatlog`);
    sendPlayerMessage(player, `\xA76You are \xA74${player.hasTag(`cl-combatlogged`) ? `in combat for \xA73${combatscore / 20 >= 60 ? `${Math.floor(combatscore / 20 / 60)} ${Math.floor(combatscore / 20 / 60) == 1 ? `minute` : `minutes`} ${Math.floor(combatscore / 20 - Math.floor(combatscore / 20 / 60) * 60)}` : `${Math.floor(combatscore / 20)}`}s` : `not in combat`}`);
  }
});

// src/combatlog/commands/rsp.ts
new Command({
  name: `relievesp`,
  aliases: [`rsp`, `relievespawnprotection`, `relievespawnprot`, `rsprot`],
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- relievesp\xA7r\xA7g
> Remove spawn protection if you have it

> Usage: ${config.prefix}relievesp

> Aliases: [
    ${config.prefix}rsp
    ${config.prefix}relievespawnprotection
    ${config.prefix}relievespawnprot
    ${config.prefix}rsprot
]

> Examples: [
    ${config.prefix}rsp
    ${config.prefix}relievesp
]`,
  code({ player, args }) {
    if (!player.hasTag(`cl-spawnkill`))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cYou don't have spawn protection!`);
    player.removeTag(`cl-spawnkill`);
    sendPlayerMessage(player, `\xA7cYou no longer have spawn protection!`);
    player.onScreenDisplay.setActionBar(`\xA73You are no longer spawn protected!`);
  }
});

// src/combatlog/commands/help.ts
new Command({
  name: `help`,
  aliases: [`h`],
  helpMenu: `none`,
  code({ player, args }) {
    if (helpMoreInfo(player, args) === true)
      return;
    const cmdData = commands.find((c) => c.name.toLowerCase() === args[0]?.toLowerCase() || c.aliases?.includes(args[0]?.toLowerCase()));
    if (cmdData) {
      if (cmdData.altHelpMenu && !(player.isOp() || player.hasTag(`lifesteal-opped`))) {
        sendPlayerMessage(player, `${cmdData.altHelpMenu}`);
        return;
      }
      if (!cmdData.helpMenu)
        return sendPlayerMessage(player, `\xA7cThere is no available help menu, this is a bug and should be reported to GamerDos. He probably forgot to put a help menu because hes stupid lmao (Discord: https://dsc.gg/gamerdos). Anyway heres a placeholder help menu:

Command Name: ${cmdData.name}
Staff Only: ${cmdData.staffOnly}
Command aliases: [
    ${cmdData.aliases?.join(`
    `) ?? `none`}
]`);
      if (cmdData.helpMenu === `none`) {
        sendPlayerMessage(player, `\xA7cNo help menu available for this command! (${config.prefix}${args[0]})`);
        return;
      }
      sendPlayerMessage(player, `${cmdData.helpMenu}`);
      return;
    }
    sendPlayerMessage(
      player,
      `\xA7c----------------------------
\xA7c\xA7lACL Help Page\xA7r
\xA7f\xA7lCommand Prefix: \xA7c${config.prefix}
\xA7r\xA7c----------------------------

\xA76Normie Commands --

\xA7e- \xA7lrelievesp \xA7r\xA7g| Removes your spawn protection if you have just been killed by a player
\xA7e- \xA7lcheck \xA7r\xA7g| Check if you are combat logged

\xA7r\xA7sStaff Commands --\xA7r
${player.hasTag(config.staffTag) || player.isOp() ? `
\xA79\xA7lcombattime <amount> \xA7r\xA7u| Set the combat time
\xA79\xA7lmobtriggerlog <true/false> \xA7r\xA7u| Whether or not mobs combat tag you
\xA79\xA7lspawnkilltime <amount/disable> \xA7r\xA7u| Set the spawn kill time
\xA79\xA7ldisabletpcombat <true/false> \xA7r\xA7u| Whether or not to disable ender pearls in combat
\xA79\xA7litemdroplog <true/false> \xA7r\xA7u| Toggle whether items drop immediately after a combat tagged player leaves, or after they join back
\xA79\xA7ldisableelytracombat <true/false> \xA7r\xA7u| Toggle whether elytras are allowed in combat or not
\xA79\xA7lsafezone <add/remove/list> <coord1> <coord2> \xA7r\xA7u| Add, remove, or list safezones
\xA79\xA7litemblacklist <itemid> \xA7r\xA7u| Add an item to the item black list

\xA7r\xA7f\xA7lDo ${config.prefix}help <commandName> for information on that command!` : `\xA7cYou do not have permission to see this! Do /tag @s add ${config.staffTag} to get permission

\xA7r\xA7f\xA7lDo ${config.prefix}help <commandName> for information on that command!`}`
    );
  }
});

// src/combatlog/commands/staffOnly/bantime.ts
new Command({
  name: `bantime`,
  staffOnly: true,
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- bantime\xA7r\xA7g
> Set the ban time (How long a player is banned after combat logging)

> Usage: ${config.prefix}bantime <amount>

> Aliases: [
    ${config.prefix}bantime
]

> Examples: [
    ${config.prefix}bantime
    ${config.prefix}bantime 30
    ${config.prefix}bantime 1minute
    ${config.prefix}bantime 1min
    ${config.prefix}bantime 1m
    ${config.prefix}bantime 24h
    ${config.prefix}bantime 1d
    ${config.prefix}bantime 1day
    ${config.prefix}bantime 4w
    ${config.prefix}bantime 4weeks
]`,
  code({ player, args }) {
    if (args[0] == `default`) {
      clSettings.set(`bantime`, 30);
      sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set the combat time to \xA7f30s`);
      return;
    }
    if (!args[0])
      return sendPlayerMessage(player, `\xA7aBantime is set to ${clSettings.get(`bantime`)}`);
    if (args[0].endsWith(`m`) || args[0].endsWith(`minute`) || args[0].endsWith(`min`))
      args[0] = `${+args[0].replace(/[^\d\W]/g, ``) * 60}`;
    if (args[0].endsWith(`h`) || args[0].endsWith(`hour`) || args[0].endsWith(`hours`))
      args[0] = `${+args[0].replace(/[^\d\W]/g, ``) * 60 * 60}`;
    if (args[0].endsWith(`d`) || args[0].endsWith(`day`) || args[0].endsWith(`days`))
      args[0] = `${+args[0].replace(/[^\d\W]/g, ``) * 60 * 60 * 24}`;
    if (args[0].endsWith(`w`) || args[0].endsWith(`week`) || args[0].endsWith(`weeks`))
      args[0] = `${+args[0].replace(/[^\d\W]/g, ``) * 60 * 60 * 24 * 7}`;
    if (isNaN(+args[0]))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cThat isn't a number!`);
    if (+args[0] < 0 || +args[0] > 2419200)
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cYou can only set the ban time to seconds between 0 and 2419200 (4 weeks)!`);
    clSettings.set(`bantime`, Math.floor(+args[0]));
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set ban time to \xA7f${Math.floor(+args[0])}s \xA77(${timeStamp(+args[0] * 1e3)})`);
  }
});
var timeStamp = (time) => {
  let seconds = Math.floor(time / 1e3);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 7;
  const duration = [];
  if (weeks)
    duration.push(`${weeks} week${weeks > 1 ? `s` : ``}`);
  if (days)
    duration.push(`${days} day${days > 1 ? `s` : ``}`);
  if (hours)
    duration.push(`${hours} hour${hours > 1 ? `s` : ``}`);
  if (minutes)
    duration.push(`${minutes} minute${minutes > 1 ? `s` : ``}`);
  if (seconds)
    duration.push(`${seconds} second${seconds > 1 ? `s` : ``}`);
  if (duration.length)
    return duration.join(`, `);
  else
    return `0 seconds`;
};

// src/combatlog/commands/staffOnly/combattime.ts
new Command({
  name: `combattime`,
  aliases: [`combattimer`, `cltime`, `cltimer`],
  staffOnly: true,
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- combattime\xA7r\xA7g
> Set the combat time

> Usage: ${config.prefix}combattimer <amount>

> Aliases: [
    ${config.prefix}combattimer
    ${config.prefix}cltime
    ${config.prefix}cltimer
]

> Examples: [
    ${config.prefix}combattime
    ${config.prefix}combattime 30
    ${config.prefix}combattime 1min
    ${config.prefix}combattime 1minute
    ${config.prefix}combattime 1m
]`,
  code({ player, args }) {
    if (args[0] == `default`) {
      clSettings.set(`combattime`, 30);
      sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set the combat time to \xA7f30s`);
      return;
    }
    if (!args[0])
      return sendPlayerMessage(player, `\xA7aCombattime is set to ${clSettings.get(`combattime`)}`);
    if (args[0].endsWith(`m`) || args[0].endsWith(`minute`) || args[0].endsWith(`min`))
      args[0] = `${+args[0].replace(/[^\d\W]/g, ``) * 60}`;
    if (isNaN(+args[0]))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cThat isn't a number!`);
    if (+args[0] < 3 || +args[0] > 180)
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cYou can only set the combat time to seconds between 3 and 180!`);
    clSettings.set(`combattime`, Math.floor(+args[0]));
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set combat time to \xA7f${Math.floor(+args[0])}s \xA77(${timeStamp2(+args[0] * 1e3)})`);
  }
});
var timeStamp2 = (time) => {
  let seconds = Math.floor(time / 1e3);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 7;
  const duration = [];
  if (weeks)
    duration.push(`${weeks} week${weeks > 1 ? `s` : ``}`);
  if (days)
    duration.push(`${days} day${days > 1 ? `s` : ``}`);
  if (hours)
    duration.push(`${hours} hour${hours > 1 ? `s` : ``}`);
  if (minutes)
    duration.push(`${minutes} minute${minutes > 1 ? `s` : ``}`);
  if (seconds)
    duration.push(`${seconds} second${seconds > 1 ? `s` : ``}`);
  if (duration.length)
    return duration.join(`, `);
  else
    return `0 seconds`;
};

// src/combatlog/commands/staffOnly/disableflycombat.ts
new Command({
  name: `disableelytracombat`,
  aliases: [`disableflycombat`, `dfc`, `disablefc`],
  staffOnly: true,
  code({ player, args }) {
    if (!args[0])
      return sendPlayerMessage(player, `\xA7aDisableElytraCombat is set to ${clSettings.get(`disableelytracombat`)}`);
    if (![`true`, `false`].includes(args[0].toLowerCase()))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cError, must be true || false`);
    clSettings.set(`disableelytracombat`, args[0].toLowerCase());
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set DisableElytraCombat to \xA7f${args[0]}`);
  }
});

// src/combatlog/commands/staffOnly/disabletpcombat.ts
new Command({
  name: `disabletpcombat`,
  aliases: [`disabletp`, `disabletpcomb`, `dtpc`],
  staffOnly: true,
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- disabletpcombat\xA7r\xA7g
> Whether or not to disable ender pearls during combat

> Usage: ${config.prefix}disabletpcombat <true/false>

> Aliases: [
    ${config.prefix}disabletp
    ${config.prefix}disabletpcomb
    ${config.prefix}dtpc

> Examples: [
    ${config.prefix}disabletpcombat true
    ${config.prefix}disabletp true
    ${config.prefix}disabletpcomb false
    ${config.prefix}dtpc false
]`,
  code({ player, args }) {
    if (!args[0])
      return sendPlayerMessage(player, `\xA7aDisabletpincombat is set to ${clSettings.get(`disabletpcombat`)}`);
    if (![`true`, `false`].includes(args[0].toLowerCase()))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cError, must be true || false`);
    clSettings.set(`disabletpcombat`, args[0].toLowerCase());
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set DisableTPcombat to \xA7f${args[0]}`);
  }
});

// src/combatlog/commands/staffOnly/itemblacklist.ts
import { ItemStack } from "@minecraft/server";
new Command({
  name: `itemblacklist`,
  aliases: [`iblacklist`],
  staffOnly: true,
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- iblacklist\xA7r\xA7g
> Blacklist certain items

> Usage: ${config.prefix}iblacklist <itemid>

> Aliases: [
    ${config.prefix}iblacklist
    ${config.prefix}itemblacklist

> Examples: [
    ${config.prefix}iblacklist minecraft:ender_pearl
    ${config.prefix}itemblacklist
]`,
  code({ player, args }) {
    if (!args[0])
      return sendPlayerMessage(player, `\xA7eBlacklisted items:
\xA76${Array.from(iblacklist.keys()).join(`
`)}`);
    if (iblacklist.has(`${args[0]}`)) {
      iblacklist.delete(`${args[0].toLowerCase()}`);
      sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully removed ${args[0]} from item blacklist`);
      return;
    }
    try {
      new ItemStack(`${args[0]}`);
    } catch {
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cItem doesn't exist, make sure you entered the right ID`);
    }
    iblacklist.set(`${args[0].toLowerCase()}`, args[0].toLowerCase());
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully added ${args[0]} to item blacklist`);
  }
});

// src/combatlog/commands/staffOnly/itemdroplog.ts
new Command({
  name: `itemdroplog`,
  aliases: [`itemdroponlog`, `itemdrop`],
  staffOnly: true,
  code({ player, args }) {
    if (!args[0])
      return sendPlayerMessage(player, `\xA7aItemdroplog is set to ${clSettings.get(`itemdroplog`)}`);
    if (![`true`, `false`].includes(args[0].toLowerCase()))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cError, must be true || false`);
    clSettings.set(`itemdroplog`, args[0].toLowerCase());
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set itemdroplog to \xA7f${args[0]}`);
  }
});

// src/combatlog/commands/staffOnly/mobtriggerlog.ts
new Command({
  name: `mobtriggerlog`,
  aliases: [`moblog`, `mobtriggerclog`, `mobclog`],
  staffOnly: true,
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- mobtriggerlog\xA7r\xA7g
> Whether or not mobs trigger combat

> Usage: ${config.prefix}mobtriggerlog

> Aliases: [
    ${config.prefix}moblog
    ${config.prefix}mobtriggerclog
    ${config.prefix}mobclog

> Examples: [
    ${config.prefix}mobtriggerlog true
    ${config.prefix}moblog false
]`,
  code({ player, args }) {
    if (!args[0])
      return sendPlayerMessage(player, `\xA7aMobtriggerlog is set to ${clSettings.get(`mobtriggerlog`)}`);
    if (![`true`, `false`].includes(args[0].toLowerCase()))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cError, must be true || false`);
    clSettings.set(`mobtriggerlog`, args[0].toLowerCase());
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set mobtriggerlog to \xA7f${args[0]}`);
  }
});

// src/combatlog/commands/staffOnly/safezone.ts
new Command({
  name: `safezone`,
  staffOnly: true,
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- safezone\xA7r\xA7g
> Add or remove a safezone

> Usage: ${config.prefix}safezone <add/remove/list/protadd> <coord1> <coord2>

> Args: [
    add - Add a pvp safezone
    protadd - Add a block protection safezone
    remove - Remove a safezone
    list - Remove a safezone
]

> Examples: [
    ${config.prefix}safezone add -5 5 5 3 -3 5
    ${config.prefix}safezone protadd -5 5 5 3 -3 5
    ${config.prefix}safezone remove -5 5 5 3 -3 5
    ${config.prefix}safezone list
]`,
  code({ player, args }) {
    if (!args[0])
      return sendPlayerMessage(player, `\xA7cNo argument detected (add/remove/list/protadd)`);
    if (args.length < 7 && args[0] !== `list`)
      return sendPlayerMessage(player, `\xA7cIncomplete safezone coords`);
    const coords = `${args[1]}--${args[2]}--${args[3]}--${args[4]}--${args[5]}--${args[6]}`;
    switch (args.shift()) {
      default:
        if (!args[0])
          return sendPlayerMessage(player, `\xA7cWrong argument detected (add/remove/list/protadd)`);
        break;
      case `add`:
        if (safezones.get(`${coords}`) && safezones.get(`${coords}`) === `true`) {
          safezones.set(`${coords}`, `both`);
          sendPlayerMessage(player, `\xA7aAdded a pvp safezone between \xA7f${args[0]} ${args[1]} ${args[2]}\xA7a and \xA7f${args[3]} ${args[4]} ${args[5]}`);
          return;
        }
        if (coords.split(`--`).some((x) => isNaN(+x) || x.length === 0))
          return sendPlayerMessage(player, `\xA7cInvalid coords!`);
        safezones.set(`${coords}`, `false`);
        sendPlayerMessage(player, `\xA7aAdded a pvp safezone between \xA7f${args[0]} ${args[1]} ${args[2]}\xA7a and \xA7f${args[3]} ${args[4]} ${args[5]}`);
        break;
      case `protadd`:
        if (safezones.get(`${coords}`) && safezones.get(`${coords}`) === `false`) {
          safezones.set(`${coords}`, `both`);
          sendPlayerMessage(player, `\xA7aAdded a block safezone between \xA7f${args[0]} ${args[1]} ${args[2]}\xA7a and \xA7f${args[3]} ${args[4]} ${args[5]}`);
          return;
        }
        if (coords.split(`--`).some((x) => isNaN(+x) || x.length === 0))
          return sendPlayerMessage(player, `\xA7cInvalid coords!`);
        safezones.set(`${coords}`, `true`);
        sendPlayerMessage(player, `\xA7aAdded a block safezone between \xA7f${args[0]} ${args[1]} ${args[2]}\xA7a and \xA7f${args[3]} ${args[4]} ${args[5]}`);
        break;
      case `remove`:
        if (safezones.has(`${coords}`))
          safezones.delete(`${coords}`);
        else
          return sendPlayerMessage(player, `\xA7cNo safezone detected between those coords!`);
        sendPlayerMessage(player, `\xA7aDeleted the safezone/s between \xA7f${args[0]} ${args[1]} ${args[2]}\xA7a and \xA7f${args[3]} ${args[4]} ${args[5]}`);
        break;
      case `list`:
        sendPlayerMessage(player, `\xA7eSafezones:
${Array.from(safezones.entries()).map((x) => `\xA76${x[0].split(`--`).join(` `)} BlockProt: ${x[1]}
`)}`);
        break;
    }
  }
});

// src/combatlog/commands/staffOnly/sptime.ts
new Command({
  name: `spawnkilltime`,
  aliases: [`sptime`],
  helpMenu: `\xA7e\xA7lAntiCL Help Page -- spawnkilltime\xA7r\xA7g
> Set the spawn kill protection time (Amount of time before players can damage killed players again)

> Usage: ${config.prefix}spawnkilltime <amount/disable>

> Aliases: [
    ${config.prefix}sptime
]

> Examples: [
    ${config.prefix}spawnkilltime 30
    ${config.prefix}spawnkilltime 1minute
    ${config.prefix}sptime 1min
    ${config.prefix}sptime 1m
    ${config.prefix}sptime disable
]`,
  code({ player, args }) {
    if (args[0] == `default`) {
      clSettings.set(`spawnkilltime`, 30);
      args[0] = `30`;
      sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set spawnkill time to \xA7f${+args[0]}s (${(+args[0] / 60).toFixed(2)} ${+args[0] / 60 == 1 ? `minute` : `minutes`})`);
      return;
    }
    if (args[0] == `disable`) {
      clSettings.set(`spawnkilltime`, 0);
      sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully disabled spawnkill protection`);
      return;
    }
    if (!args[0])
      return sendPlayerMessage(player, `\xA7aSpawnkilltime is set to ${clSettings.get(`spawnkilltime`)}`);
    if (args[0].endsWith(`m`) || args[0].endsWith(`minute`) || args[0].endsWith(`min`))
      args[0] = `${+args[0].replace(/[^\d\W]/g, ``) * 60}`;
    if (isNaN(+args[0]))
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cThat isn't a number!`);
    clSettings.set(`spawnkilltime`, Math.floor(+args[0]));
    if (+args[0] < 3 || +args[0] > 600)
      return sendPlayerMessage(player, `\xA78[\xA7cX\xA78] \xA7cYou can only set the spawnkill time to seconds between 3 and 600!`);
    sendPlayerMessage(player, `\xA78[\xA7a/\xA78] \xA7aSuccessfully set spawnkill time to \xA7f${Math.floor(+args[0])}s \xA77(${timeStamp3(+args[0] * 1e3)})`);
  }
});
var timeStamp3 = (time) => {
  let seconds = Math.floor(time / 1e3);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 7;
  const duration = [];
  if (weeks)
    duration.push(`${weeks} week${weeks > 1 ? `s` : ``}`);
  if (days)
    duration.push(`${days} day${days > 1 ? `s` : ``}`);
  if (hours)
    duration.push(`${hours} hour${hours > 1 ? `s` : ``}`);
  if (minutes)
    duration.push(`${minutes} minute${minutes > 1 ? `s` : ``}`);
  if (seconds)
    duration.push(`${seconds} second${seconds > 1 ? `s` : ``}`);
  if (duration.length)
    return duration.join(`, `);
  else
    return `0 seconds`;
};

// src/combatlog.ts
var clVersion = `1.2.3-release`;
var clSettings = new Database(`clsettings`);
var safezones = new Database(`clsafezones`);
var iblacklist = new Database(`cliblacklist`);
var bannedplayers = new Database(`bannedplayers`);
var defaultSettings = {
  combattime: `30`,
  spawnkilltime: `30`,
  bantime: `0`,
  mobtriggerlog: `false`,
  disabletpcombat: `false`,
  itemdroplog: `false`,
  disableelytracombat: `false`
};
for (const key in defaultSettings) {
  if (!clSettings.has(key)) {
    clSettings.set(key, defaultSettings[key]);
  }
}
var invMap = /* @__PURE__ */ new Map();
function savePlayerData(player) {
  const { name: playerName, location, dimension } = player;
  const logged = player.getTags().includes(`cl-combatlogged`);
  const items = [];
  const equipmentInventory = player.getComponent(`equippable`);
  const equipmentSlots = [
    EquipmentSlot.Head,
    EquipmentSlot.Chest,
    EquipmentSlot.Legs,
    EquipmentSlot.Feet,
    EquipmentSlot.Offhand
  ];
  for (const slot of equipmentSlots) {
    const item = equipmentInventory.getEquipment(slot);
    if (item)
      items.push(item);
  }
  const obj = { playerName, location, dimension: dimension.id, logged, player, items };
  invMap.set(player.name, obj);
}
var inventoryMap = /* @__PURE__ */ new Map();
world5.beforeEvents.playerLeave.subscribe((data) => {
  const player = data.player;
  const playerName = player.name;
  const inventory = player.getComponent(`inventory`).container;
  const items = [];
  const dimension = player.dimension.id;
  const location = player.location;
  const logged = player.hasTag(`cl-combatlogged`);
  const playerFind = invMap.get(player.name);
  if (+clSettings.get(`bantime`) !== 0) {
    bannedplayers.set(`${player.id}`, `${Date.now() + +clSettings.get(`bantime`) * 1e3}`);
  }
  for (let i = 0; i < inventory.size; i++) {
    const item = inventory.getItem(i);
    if (item)
      items.push(item);
  }
  inventoryMap.set(player.name, items);
  system3.run(() => {
    const playerData = inventoryMap.get(playerName);
    if (!playerData || logged === false || clSettings.get(`itemdroplog`) === `false`)
      return;
    try {
      world5.getDimension(dimension).spawnItem(new ItemStack2(`lifesteal:heart`), location);
    } catch {
    }
    for (const item of playerData) {
      world5.getDimension(dimension).spawnItem(item, location);
    }
    for (const item of playerFind.items) {
      world5.getDimension(dimension).spawnItem(item, location);
    }
    inventoryMap.delete(playerName);
  });
});
system3.runInterval(() => {
  for (const player of world5.getAllPlayers()) {
    const inventory = player.getComponent(`inventory`).container;
    const plrData = invMap.get(player.name);
    if (!plrData) {
      savePlayerData(player);
      continue;
    }
    if (plrData.logged && clSettings.get(`disabletpcombat`) === `true`) {
      if (import_math.Vector3Utils.distance(plrData.location, player.location) > 40) {
        player.teleport(plrData.location, { dimension: player.dimension });
        sendPlayerMessage(player, `\xA74You are in combat and have been teleported back!`);
      }
    }
    for (let i = 0; i < inventory.size; i++) {
      const item = inventory.getItem(i);
      if (item && Array.from(iblacklist.keys()).includes(item.typeId.replace(/^(.*?:)/, ``)) && !player.hasTag(config.staffTag)) {
        inventory.setItem(i);
        sendPlayerMessage(player, `\xA7c${item.typeId} is blacklisted`);
      }
    }
    savePlayerData(player);
  }
}, 10);
world5.afterEvents.entityDie.subscribe((data) => {
  let player = data.deadEntity;
  let damaging = data.damageSource.damagingEntity;
  try {
    player.typeId;
  } catch {
    return;
  }
  if (player.typeId !== `minecraft:player`)
    return;
  if (player.hasTag(`cl-combatlogged`))
    player.runCommand(`title @s actionbar \xA73You are no longer in combat!`);
  player.removeTag(`cl-combatlogged`);
  if (!damaging || damaging.typeId !== `minecraft:player` || player == damaging)
    return;
  system3.runTimeout(() => {
    player.addTag(`cl-spawnkill`);
  }, 5);
});
world5.afterEvents.entityHurt.subscribe((data) => {
  let player = data.hurtEntity;
  let damaging = data.damageSource.damagingEntity;
  let health = player.getComponent(`health`);
  if (!damaging)
    return;
  if (player.hasTag(`cl-spawnkill`)) {
    if (player !== damaging && damaging.typeId == `minecraft:player`) {
      sendPlayerMessage(damaging, `\xA7cYou cannot damage this player as they have just been killed!`);
      for (let i = 0; i < 10; i++) {
        player.applyKnockback(0, 0, 0, 0);
        player.applyKnockback(0, 0, 0, 0);
      }
      health.setCurrentValue(Math.ceil(health.currentValue + data.damage));
      damaging.addEffect(`weakness`, 40, { amplifier: 255, showParticles: false });
      system3.runTimeout(() => {
        if (health.currentValue <= 0) {
          damaging.kill();
          sendAllMessage2(`\xA7cKilled ${damaging.name} for \xA76Spawn Killing`);
        }
      }, 1);
    }
    return;
  }
  if (damaging.hasTag(`cl-spawnkill`)) {
    player.runCommand(`title @s actionbar \xA7cYou no longer have spawn protection!`);
    player.removeTag(`cl-spawnkill`);
  }
  if (player == damaging)
    return;
  if (clSettings.get(`mobtriggerlog`) == `false` && (player.typeId !== `minecraft:player` || damaging.typeId !== `minecraft:player`))
    return;
  if (clSettings.get(`mobtriggerlog`) == `true`) {
    if (!checkCL(player, damaging))
      return;
  }
  let combatscore = +clSettings.get(`combattime`);
  if (!player.hasTag(`cl-combatlogged`))
    sendPlayerMessage(player, `\xA78[\xA76!\xA78] \xA74You are now combat logged! \xA76Do not leave or you will die \xA7l(\xA73${formatTime(combatscore)}\xA76)`);
  if (player.typeId == `minecraft:player`) {
    player.addTag(`cl-combatlogged`);
    player.runCommand(`scoreboard players set @s combatlog ${clSettings.get(`combattime`) * 20}`);
  }
  if (damaging.typeId == `minecraft:player`) {
    damaging.addTag(`cl-combatlogged`);
    damaging.runCommand(`scoreboard players set @s combatlog ${clSettings.get(`combattime`) * 20}`);
  }
});
function checkCL(player, damaging) {
  const isPlayer = (entity) => entity.typeId === `minecraft:player`;
  const isMonster = (entity) => Array.from(entity.dimension.getEntities({ type: entity.typeId, families: [`monster`] })).length !== 0;
  const bothPlayers = isPlayer(player) && isPlayer(damaging);
  const oneMonster = isMonster(player) || isMonster(damaging);
  return bothPlayers || oneMonster;
}
function formatTime(time) {
  const minutes = Math.floor(time / 20 / 60);
  const seconds = Math.floor(time / 20) - minutes * 60;
  return time / 20 >= 60 ? `${minutes ?? 0} minute${minutes === 1 ? `` : `s`} ${seconds ?? 0}s` : `${seconds ?? 0}s`;
}
function stopGliding(player) {
  player.applyDamage(1);
  const gamemode = player.getGameMode();
  player.setGameMode(GameMode.spectator);
  player.setGameMode(gamemode);
  sendPlayerMessage(player, `\xA74You are in combat and you cannot use your elytra!`);
}
system3.runInterval(() => {
  let players = world5.getAllPlayers();
  for (let player of players) {
    if (player.hasTag(`cl-combatlogged`) && clSettings.get(`disableelytracombat`) === `true` && player.isGliding) {
      stopGliding(player);
    }
    if (!player.hasTag(`cl-combatlogged`))
      player.runCommand(`scoreboard players set @s combatlog ${clSettings.get(`combattime`) * 20}`);
    else {
      let combatscore = getScore(player, `combatlog`);
      player.runCommand(`scoreboard players remove @s combatlog 1`);
      player.runCommand(`title @s actionbar \xA7eYou are \xA7ccombat logged! \xA7l\xA73(\xA7p${formatTime(combatscore)}\xA73)`);
    }
    if (!player.hasTag(`cl-spawnkill`))
      player.runCommand(`scoreboard players set @s spawnkill ${clSettings.get(`spawnkilltime`) * 20}`);
    else {
      player.removeTag(`cl-combatlogged`);
      let spscore = getScore(player, `spawnkill`);
      player.runCommand(`scoreboard players remove @s spawnkill 1`);
      player.runCommand(`title @s actionbar \xA7eYou are \xA7cspawn protected! \xA7l\xA73(\xA7p${formatTime(spscore)}\xA73)`);
    }
    if (getScore(player, `spawnkill`) <= 0) {
      player.removeTag(`cl-spawnkill`);
      player.runCommand(`title @s actionbar \xA73You are no longer spawn protected!`);
    }
    if (getScore(player, `combatlog`) <= 0) {
      player.runCommand(`title @s actionbar \xA73You are no longer in combat!`);
      player.removeTag(`cl-combatlogged`);
    }
  }
}, 1);
world5.beforeEvents.itemUse.subscribe((data) => {
  let player = data.source;
  let item = data.itemStack;
  if (player.typeId !== `minecraft:player`)
    return;
  if (item.typeId == `minecraft:ender_pearl` && player.hasTag(`cl-combatlogged`)) {
    if (clSettings.get(`disabletpcombat`) !== `true`)
      return;
    data.cancel = true;
    sendPlayerMessage(player, `\xA74You are in combat!`);
  }
});
function isBetween(vectorA, vectorB, vectorC) {
  return (vectorA.x <= vectorC.x && vectorC.x <= vectorB.x || vectorB.x <= vectorC.x && vectorC.x <= vectorA.x) && (vectorA.y <= vectorC.y && vectorC.y <= vectorB.y || vectorB.y <= vectorC.y && vectorC.y <= vectorA.y) && (vectorA.z <= vectorC.z && vectorC.z <= vectorB.z || vectorB.z <= vectorC.z && vectorC.z <= vectorA.z);
}
world5.beforeEvents.playerBreakBlock.subscribe((data) => {
  for (const safezone of safezones.entries()) {
    const coords = safezone[0].split(`--`);
    const coords1 = new import_math.Vector3Builder(+coords[0], +coords[1], +coords[2]);
    const coords2 = new import_math.Vector3Builder(+coords[3], +coords[4], +coords[5]);
    const { x, y, z } = data.block.location;
    const player = data.player;
    if (isBetween(coords1, coords2, new import_math.Vector3Builder(x, y, z)) && (safezone[1] === `true` || safezone[1] === `both`) && !player.hasTag(`cl-staff`) && !player.isOp()) {
      data.cancel = true;
      sendPlayerMessage(player, `\xA7cSorry\xA77, but you can't break that block here.`);
    }
  }
});
var directionsalt = (offset) => {
  const x = 0, y = 0, z = 0;
  return {
    0: { x, y: y - offset, z },
    1: { x, y: y + offset, z },
    2: { x, y, z: z + offset },
    3: { x, y, z: z - offset },
    4: { x: x + offset, y, z },
    5: { x: x - offset, y, z },
    down: { x, y: y - offset, z },
    up: { x, y: y + offset, z },
    north: { x, y, z: z - offset },
    south: { x, y, z: z + offset },
    west: { x: x - offset, y, z },
    east: { x: x + offset, y, z }
  };
};
world5.beforeEvents.playerPlaceBlock.subscribe((data) => {
  for (const safezone of safezones.entries()) {
    const coords = safezone[0].split(`--`);
    const coords1 = new import_math.Vector3Builder(+coords[0], +coords[1], +coords[2]);
    const coords2 = new import_math.Vector3Builder(+coords[3], +coords[4], +coords[5]);
    const { x, y, z } = data.block.offset(directionsalt(1)[data.face.toLowerCase()]);
    const player = data.player;
    if (isBetween(coords1, coords2, new import_math.Vector3Builder(x, y, z)) && (safezone[1] === `true` || safezone[1] === `both`) && !player.hasTag(`cl-staff`) && !player.isOp()) {
      data.cancel = true;
      sendPlayerMessage(player, `\xA7cSorry\xA77, but you can't place that block here.`);
    }
  }
});
world5.afterEvents.entityHurt.subscribe((data) => {
  for (const safezone of safezones.entries()) {
    const coords = safezone[0].split(`--`);
    const coords1 = new import_math.Vector3Builder(+coords[0], +coords[1], +coords[2]);
    const coords2 = new import_math.Vector3Builder(+coords[3], +coords[4], +coords[5]);
    const { x, y, z } = data.hurtEntity.location;
    const player = data.hurtEntity;
    if (isBetween(coords1, coords2, new import_math.Vector3Builder(x, y, z)) && player.typeId === 'minecraft:player' && (data.damageSource.damagingEntity || data.damageSource.type === 'end_crystal' || data.damageSource.type === 'explosion') && (safezone[1] === 'false' || safezone[1] === 'both') && !player.hasTag('cl-staff')) {
      const health = player.getComponent(`health`);
      health.setCurrentValue(health.currentValue + data.damage);
      sendPlayerMessage(data.damageSource.damagingEntity, `\xA7cCannot hurt people in a safezone!`);
      data.damageSource.damagingEntity.addEffect(`weakness`, 10, { amplifier: 255 });
      player.addEffect(`resistance`, 20, { amplifier: 255 });
      player.addEffect(`regeneration`, 20, { amplifier: 255 });
    }
  }
});
world5.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
  if (initialSpawn == false)
    return;
  if (!world5.scoreboard.getObjective(`combatlog`))
    world5.scoreboard.addObjective(`combatlog`, `combatTimer`);
  if (!world5.scoreboard.getObjective(`spawnkill`))
    world5.scoreboard.addObjective(`spawnkill`, `spawnKillTimer`);
  if (player.hasTag(`cl-combatlogged`)) {
    player.removeTag(`cl-combatlogged`);
    player.runCommand(`gamemode s @s`);
    if (world5.getDynamicProperty(`lifesteal:envsteal`) === false) {
      addScore(player, `ls-death`, world5.getDynamicProperty(`lifesteal:heartlose`));
    }
    if (clSettings.get(`itemdroplog`) == `true`) {
      player.runCommandAsync(`clear @s`).then(() => {
        player.kill();
        sendAllMessage2(`\xA7c${+clSettings.get(`bantime`) !== 0 ? `Banned` : `Killed`} ${player.name} for \xA76Combat Logging`);
      });
    } else {
      player.kill();
      sendAllMessage2(`\xA7c${+clSettings.get(`bantime`) !== 0 ? `Banned` : `Killed`} ${player.name} for \xA76Combat Logging (turn off keepinventory if items didn't drop)`);
    }
    system3.run(() => {
      if (+clSettings.get(`bantime`) !== 0) {
        if (!bannedplayers.get(`${player.id}`))
          bannedplayers.set(`${player.id}`, `${Date.now() + +clSettings.get(`bantime`) * 1e3}`);
        const endTime = bannedplayers.get(`${player.id}`);
        const currentTime = Date.now();
        if (currentTime < endTime) {
          player.runCommand(`kick ${player.name} \xA7cYou combat logged!

\xA7cYou will be unbanned in \xA76${timeStamp4(endTime - currentTime)}`);
          sendPlayerMessage(player, `\xA7cYou combat logged!

\xA7cYou will be unbanned in \xA76${timeStamp4(endTime - currentTime)}`);
        }
      }
    });
  }
  sendPlayerMessage(player, `\xA74-----
\xA7cThis world/realm/server is protected by Anti Combat Log by rasiav
\xA76AntiCL version: ${clVersion}
Command Prefix: \xA7l${config.prefix}\xA7r`);
});
var timeStamp4 = (time) => {
  let seconds = Math.floor(time / 1e3);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 7;
  const duration = [];
  if (weeks)
    duration.push(`${weeks} week${weeks > 1 ? `s` : ``}`);
  if (days)
    duration.push(`${days} day${days > 1 ? `s` : ``}`);
  if (hours)
    duration.push(`${hours} hour${hours > 1 ? `s` : ``}`);
  if (minutes)
    duration.push(`${minutes} minute${minutes > 1 ? `s` : ``}`);
  if (seconds)
    duration.push(`${seconds} second${seconds > 1 ? `s` : ``}`);
  if (duration.length)
    return duration.join(`, `);
  else
    return `0 seconds`;
};
export {
  bannedplayers,
  clSettings,
  iblacklist,
  safezones
};
/*!
 * Creator & Developer of this file: PAPISOP
 * Discord Username of PAPISOP: papisop (https://discord.com/users/457793443465527306)
 *
 * This file, created by PAPISOP, is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/
 */
