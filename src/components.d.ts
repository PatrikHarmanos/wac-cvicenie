/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PatharAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface PatharAmbulanceWlEditor {
        "entryId": string;
    }
    interface PatharAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface PatharAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPatharAmbulanceWlEditorElement;
}
export interface PatharAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPatharAmbulanceWlListElement;
}
declare global {
    interface HTMLPatharAmbulanceWlAppElement extends Components.PatharAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLPatharAmbulanceWlAppElement: {
        prototype: HTMLPatharAmbulanceWlAppElement;
        new (): HTMLPatharAmbulanceWlAppElement;
    };
    interface HTMLPatharAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLPatharAmbulanceWlEditorElement extends Components.PatharAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPatharAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLPatharAmbulanceWlEditorElement, ev: PatharAmbulanceWlEditorCustomEvent<HTMLPatharAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPatharAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLPatharAmbulanceWlEditorElement, ev: PatharAmbulanceWlEditorCustomEvent<HTMLPatharAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPatharAmbulanceWlEditorElement: {
        prototype: HTMLPatharAmbulanceWlEditorElement;
        new (): HTMLPatharAmbulanceWlEditorElement;
    };
    interface HTMLPatharAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLPatharAmbulanceWlListElement extends Components.PatharAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPatharAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLPatharAmbulanceWlListElement, ev: PatharAmbulanceWlListCustomEvent<HTMLPatharAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPatharAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLPatharAmbulanceWlListElement, ev: PatharAmbulanceWlListCustomEvent<HTMLPatharAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPatharAmbulanceWlListElement: {
        prototype: HTMLPatharAmbulanceWlListElement;
        new (): HTMLPatharAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "pathar-ambulance-wl-app": HTMLPatharAmbulanceWlAppElement;
        "pathar-ambulance-wl-editor": HTMLPatharAmbulanceWlEditorElement;
        "pathar-ambulance-wl-list": HTMLPatharAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface PatharAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface PatharAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: PatharAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface PatharAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: PatharAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "pathar-ambulance-wl-app": PatharAmbulanceWlApp;
        "pathar-ambulance-wl-editor": PatharAmbulanceWlEditor;
        "pathar-ambulance-wl-list": PatharAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pathar-ambulance-wl-app": LocalJSX.PatharAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLPatharAmbulanceWlAppElement>;
            "pathar-ambulance-wl-editor": LocalJSX.PatharAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLPatharAmbulanceWlEditorElement>;
            "pathar-ambulance-wl-list": LocalJSX.PatharAmbulanceWlList & JSXBase.HTMLAttributes<HTMLPatharAmbulanceWlListElement>;
        }
    }
}
