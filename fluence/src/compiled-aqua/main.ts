/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const run_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "cid") [] -cid-arg-)
   )
   (new $res
    (new $d
     (new $res_test
      (seq
       (seq
        (fold $res res_fold_var
         (seq
          (seq
           (ap res_fold_var $res_test)
           (canon %init_peer_id% $res_test  #res_iter_canon)
          )
          (xor
           (match #res_iter_canon.length 1
            (null)
           )
           (next res_fold_var)
          )
         )
         (never)
        )
        (canon %init_peer_id% $res_test  #res_result_canon)
       )
       (ap #res_result_canon res_gate)
      )
     )
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [res_gate.$.[0]])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type RunParams = [cid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, cid: string, config?: {ttl?: number}];

export type RunResult = Promise<string>;

export function run(...args: RunParams): RunResult {
    return callFunction$$(
        args,
        {
    "functionName": "run",
    "arrow": {
        "domain": {
            "fields": {
                "cid": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        run_script
    );
}
