export default class Heapify<T> {
    private capacity;
    _keys: T[];
    _priorities: Uint32Array;
    length: number;
    constructor(capacity?: number, PrioritiesBackingArrayType?: Uint32ArrayConstructor);
    clear(): void;
    /**
     * Bubble an item up until its heap property is satisfied.
     *
     * @param {Number} index
     * @private
     */
    bubbleUp(index: number): void;
    /**
     * Bubble an item down until its heap property is satisfied.
     *
     * @param {Number} index
     * @private
     */
    bubbleDown(index: number): void;
    /**
     * @param {*} key the identifier of the object to be pushed into the heap
     * @param {Number} priority 32-bit value corresponding to the priority of this key
     */
    push(key: T, priority?: number): void;
    pop(): T;
    peekPriority(): number;
    peek(): T;
    toString(): string;
    get [Symbol.toStringTag](): string;
    [Symbol.iterator](): Generator<(number | T)[], void, unknown>;
    keys(): Generator<T, void, unknown>;
    priorities(): Generator<number, void, unknown>;
}
//# sourceMappingURL=heapify.d.ts.map