/** @internal */
require('fast-text-encoding')

/** @internal */
import { fetch } from "./modules/spinSdk"
import { HttpRequest, HttpResponse, HandleRequest } from "./modules/spinSdk"

/** @internal */
import { fsPromises } from "./modules/fsPromises"
import "./modules/fsPromises"

/** @internal */
import { glob } from "./modules/glob"
import "./modules/glob"

/** @internal */
import { atob, btoa, Buffer } from "./modules/stringHandling"

/** @internal */
import {crypto} from "./modules/crypto"

/** @internal */
import { URL, URLSearchParams } from "./modules/url"
import "./modules/url"

/** @internal */
export { atob, btoa, Buffer, fetch, fsPromises, glob, crypto, URL, URLSearchParams }


// Stuff to be exported to the sdk types file
export { HttpRequest, HttpResponse, HandleRequest}
