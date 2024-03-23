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
   (new $d
    (new $res
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (new %TFBar_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("colour" "#CC0000") %TFBar_obj_map)
                         (ap ("label" "") %TFBar_obj_map)
                        )
                        (ap ("time" "2024-01-01") %TFBar_obj_map)
                       )
                       (ap ("value" 6481) %TFBar_obj_map)
                      )
                      (canon %init_peer_id% %TFBar_obj_map  TFBar_obj)
                     )
                    )
                    (ap TFBar_obj $d)
                   )
                   (new %TFBar_obj-0_map
                    (seq
                     (seq
                      (seq
                       (seq
                        (ap ("colour" "#CC0000") %TFBar_obj-0_map)
                        (ap ("label" "") %TFBar_obj-0_map)
                       )
                       (ap ("time" "2024-02-01") %TFBar_obj-0_map)
                      )
                      (ap ("value" 8786) %TFBar_obj-0_map)
                     )
                     (canon %init_peer_id% %TFBar_obj-0_map  TFBar_obj-0)
                    )
                   )
                  )
                  (ap TFBar_obj-0 $d)
                 )
                 (new %TFBar_obj-1_map
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("colour" "#CC0000") %TFBar_obj-1_map)
                      (ap ("label" "") %TFBar_obj-1_map)
                     )
                     (ap ("time" "2024-03-01") %TFBar_obj-1_map)
                    )
                    (ap ("value" 9239) %TFBar_obj-1_map)
                   )
                   (canon %init_peer_id% %TFBar_obj-1_map  TFBar_obj-1)
                  )
                 )
                )
                (ap TFBar_obj-1 $d)
               )
               (new $option-inline
                (seq
                 (seq
                  (new %TfFrameV0_obj_map
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (ap ("chainNetworkId" 31337) %TfFrameV0_obj_map)
                        (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TfFrameV0_obj_map)
                       )
                       (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TfFrameV0_obj_map)
                      )
                      (ap ("definition" "bafkreih7hkunqza42pf33gwehiaepn6rvsiqxekk2tlsy2emril4rud7qu") %TfFrameV0_obj_map)
                     )
                     (ap ("timestamp" "2024-03-23T09:49:03.565Z") %TfFrameV0_obj_map)
                    )
                    (canon %init_peer_id% %TfFrameV0_obj_map  TfFrameV0_obj)
                   )
                  )
                  (xor
                   (ap TfFrameV0_obj $option-inline)
                   (null)
                  )
                 )
                 (canon %init_peer_id% $option-inline  #option-inline-0)
                )
               )
              )
              (new %Deals_obj_map
               (seq
                (ap ("tfFrameV0" #option-inline-0) %Deals_obj_map)
                (canon %init_peer_id% %Deals_obj_map  Deals_obj)
               )
              )
             )
             (ap Deals_obj.$.tfFrameV0 Deals_obj_flat)
            )
            (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
           )
           (xor
            (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
            (fail :error:)
           )
          )
          (new -if-error-
           (xor
            (match ret.$.success false
             (seq
              (new $array-inline
               (seq
                (seq
                 (ap "Failed to resolve subnet: " $array-inline)
                 (ap ret.$.error $array-inline)
                )
                (canon %init_peer_id% $array-inline  #array-inline-0)
               )
              )
              (call %init_peer_id% ("run-console" "print") [#array-inline-0])
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10001
               (null)
              )
              (fail -if-error-)
             )
            )
           )
          )
         )
         (ap ret.$.workers ret_flat)
        )
        (call %init_peer_id% ("run-console" "print") [ret_flat.$.[0]])
       )
       (xor
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (call ret_flat.$.[0].worker_id.[0] ("cioKubo" "getFolders") ["/dns4/ipfs/tcp/5001" -cid-arg- "templates"] ret-0)
             )
             (call ret_flat.$.[0].worker_id.[0] ("cioKubo" "inspectParticleVaultFolder") ["templates"] ret-1)
            )
            (fold ret-1 f-0
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (call %init_peer_id% ("run-console" "print") [f-0])
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (next f-0)
             )
             (null)
            )
           )
           (canon ret_flat.$.[0].worker_id.[0] $d  #d_canon)
          )
          (call ret_flat.$.[0].worker_id.[0] ("tfBarChart" "render") [#d_canon] ret-2)
         )
         (new -if-else-error-
          (new -else-error-
           (new -if-error-
            (xor
             (seq
              (seq
               (match ret-2.$.success true
                (ap ret-2.$.results.[0] $res)
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (seq
              (ap :error: -if-error-)
              (xor
               (seq
                (seq
                 (match :error:.$.error_code 10001
                  (ap ret-2.$.error.[0] $res)
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (seq
                (seq
                 (seq
                  (seq
                   (ap :error: -else-error-)
                   (xor
                    (seq
                     (match :error:.$.error_code 10001
                      (ap -if-error- -if-else-error-)
                     )
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                    )
                    (seq
                     (ap -else-error- -if-else-error-)
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                    )
                   )
                  )
                  (fail -if-else-error-)
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
              )
             )
            )
           )
          )
         )
        )
        (seq
         (seq
          (seq
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (fail :error:)
        )
       )
      )
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
