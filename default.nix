{
  pkgs ? import <nixpkgs> {},
  run ? "zsh"
}:
(pkgs.buildFHSEnv {
  name = "nvm-env";
  targetPkgs = pkgs: (with pkgs; [
    udev
    glibc
    gcc
    zsh
    vim
  ]);
  multiPkgs = pkgs: (with pkgs; [
  ]);
  runScript = "${run}";
  profile =
    '' 
      unset LD_LIBRARY_PATH
    '';
}).env

